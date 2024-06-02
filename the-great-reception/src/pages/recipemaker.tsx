import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import PromptBlock from "../components/PromptBlock"
import RedirectSection from "../components/RedirectSection";

export default function RecipeMaker() {
    return (
        <>
            <Navbar />


            <main>
                <h1>Recipe Maker!</h1>
                <p>Create a Recipe by specifying what you want and receive a recipe made by AI!</p>
            </main>

            <PromptBlock />

            <RedirectSection buttonLink={"/asdasd"} buttonDescription={"Submit your recipe requirement!"}/>

            <Footer />
        </>


    );
}