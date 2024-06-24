"use client";

import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import DisplayJsonData from "./RecipeStream";
import ModelLoader from "./ModelLoader";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface TagInputProps {
  label: string;
  placeholder: string;
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagInput: React.FC<TagInputProps> = ({
  label,
  placeholder,
  tags,
  setTags,
}) => {
  const [input, setInput] = useState<string>("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (input.trim() !== "") {
        setTags([...tags, input.trim()]);
        setInput("");
      }
    }
  };

  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="mb-3">
      <label className="form-label fw-bold" style={{ color: "#143a43" }}>
        {label}
      </label>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="mt-2">
        {tags.map((tag, index) => (
          <span key={index} className="badge bg-secondary me-2">
            {tag}{" "}
            <i
              className="fas fa-times"
              onClick={() => handleRemoveTag(index)}
            ></i>
          </span>
        ))}
      </div>
    </div>
  );
};

interface FormData {
  occasion: string;
  cuisine: string;
  dietary_preferences: string[];
  max_time: string;
  skill_level: string;
  ingredient_mandatory: string[];
  ingredient_restrictions: string[];
  additional_notes: string;
}

export default function RecipeMaker() {
  const [occasion, setOccasion] = useState<string>("Any");
  const [cuisine, setCuisine] = useState<string>("Any");
  const [dietary_preferences, setDietaryPreference] = useState<string[]>([]);
  const [max_time, setTime] = useState<string>("Any");
  const [skill_level, setSkill] = useState<string>("Beginner");
  const [ingredient_mandatory, setMustHaveIngredients] = useState<string[]>([]);
  const [ingredient_restrictions, setNoNoIngredients] = useState<string[]>([]);
  const [additional_notes, setAdditionalNotes] = useState<string>("");

  const [modelStatus, setModelStatus] = useState("waiting");

  const [jsonData, setJsonData] = useState<any>(null);

  const handleSubmit = () => {
    const formData: FormData = {
      occasion,
      cuisine,
      max_time,
      skill_level,
      dietary_preferences,
      ingredient_mandatory,
      ingredient_restrictions,
      additional_notes,
    };
    setJsonData(JSON.stringify(formData));
  };

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-center mb-4">
          <h2>
            What are you hungry for?{" "}
            <i
              className="fas fa-info-circle"
              title="Fill out the form below to get a recipe suggestion"
            ></i>
          </h2>
        </div>

        <form>
          {/* OCCASION SECTION */}

          <div className="mb-3">
            <label className="form-label fw-bold" style={{ color: "#143a43" }}>
              Occasion
            </label>
            <select
              className="form-select"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option>Any</option>
              <option>Breakfast</option>
              <option>Dinner</option>
              <option>Lunch</option>
              <option>Dessert</option>
            </select>
          </div>

          {/* CUSISINE SECTION */}

          <div className="mb-3">
            <label className="form-label fw-bold" style={{ color: "#143a43" }}>
              Cuisine
            </label>
            <input
              type="text"
              className="form-control"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              placeholder="Any"
            />
          </div>

          {/* DIETARY PREFERENCES SECTION */}

          <TagInput
            label="Dietary Preference"
            placeholder="eg. healthy, sweet, meaty, comofort food ..."
            tags={dietary_preferences}
            setTags={setDietaryPreference}
          />

          {/* TIME SECTION */}

          <div className="mb-3">
            <label className="form-label fw-bold" style={{ color: "#143a43" }}>
              Max Cooking Time
            </label>

            <div className="d-flex align-items-center">
              <div className="form-check me-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="time"
                  value="Any"
                  checked={max_time === "Any"}
                  onChange={(e) => setTime("Any")}
                />
                <label className="form-check-label">Any</label>
              </div>
              <input
                type="range"
                className="form-range"
                min="10"
                max="360"
                step="1"
                value={max_time === "Any" ? 10 : parseInt(max_time)}
                onChange={(e) => setTime(e.target.value)}
                onClick={() => {
                  if (max_time === "Any") setTime("10");
                }}
                list="tickmarks"
              />
              <datalist id="tickmarks">
                <option value="10" label="10m"></option>
                <option value="30" label="30m"></option>
                <option value="60" label="1h"></option>
                <option value="360" label="6h"></option>
              </datalist>
              <div className="ms-2">
                {max_time === "Any"
                  ? "Any"
                  : `${
                      Math.floor(parseInt(max_time) / 60) > 0
                        ? `${Math.floor(parseInt(max_time) / 60)} hours`
                        : `${max_time} minutes`
                    }`}
              </div>
            </div>
          </div>

          {/* SKILL SECTION */}

          <div className="mb-3">
            <label className="form-label fw-bold" style={{ color: "#143a43" }}>
              Skill
            </label>
            <select
              className="form-select"
              value={skill_level}
              onChange={(e) => setSkill(e.target.value)}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Professional</option>
            </select>
          </div>

          {/* INGREDIENTS SECTION */}

          <TagInput
            label="Must have ingredients"
            placeholder="eg. left overs or your favourites ..."
            tags={ingredient_mandatory}
            setTags={setMustHaveIngredients}
          />

          <TagInput
            label="Big NoNo ingredients"
            placeholder="eg. allergies or things you just hate ..."
            tags={ingredient_restrictions}
            setTags={setNoNoIngredients}
          />

          {/* ADDITIONAL NOTES SECTION */}

          <div className="mb-3">
            <label
              className="form-label fw-bold fs-4"
              style={{ color: "#343a40" }}
            >
              Additional Notes
            </label>
            <textarea
              className="form-control"
              value={additional_notes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              maxLength={300}
              rows={4}
              placeholder="Anything else?"
            ></textarea>
          </div>

          {/* ACTION BUTTON */}

          {(modelStatus === "waiting" || modelStatus === "error") && (
            <ModelLoader setStatusParent={setModelStatus} />
          )}

          {modelStatus === "success" && (
            <div className="d-flex justify-content-center mb-4">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Create the Recipe
              </button>
            </div>
          )}

          {/* <div className="d-flex justify-content-center mb-4">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Create the Recipe
            </button>
          </div> */}
        </form>

        <div>{jsonData && <DisplayJsonData json_recipe={jsonData} />}</div>
      </div>
    </>
  );
}
