import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import optiverImg from "../../assets/images/optiver.png";
import biofilmImg from "../../assets/images/biofilm.png";
import hhriImg from "../../assets/images/hhri.png";
import orcImg from "../../assets/images/orc.png";
import mpeaImg from "../../assets/images/mpea.png";
import wrappingImg from "../../assets/images/wrapping_geometry.png";
import viridienImg from "../../assets/images/viridien.png";
import residencyImg from "../../assets/images/range_residency.png";
import lunglinkImg from "../../assets/images/lung_link.png";
import torqueImg from "../../assets/images/force_torque.png";

// Edit this array to add, remove, or update projects.
// image: leave blank ('') to show a plain placeholder background instead of a photo.
// subtitle: optional short context line shown between the title and description (e.g. "Hack The Burgh Winning Project").
// Grouped by type: Research -> Hackathons -> Open Source -> Consulting -> Independent Build
const portfolio = [
    // --- Research ---
    {
        name: "Thermal Remodelling of Bacterial Biofilm Matrices",
        subtitle: "Senior Honours Research Project",
        description: "Quantified thermal biofilm matrix remodelling across 7 B. subtilis isolates using rheometry and OCT imaging.",
        image: biofilmImg,
        url: "https://drive.google.com/file/d/19AcgZtecozrMIBviKQpUjJAhS8hEDV70/view?usp=sharing",
    },
    {
        name: "MPEA-CRSS-Prediction",
        subtitle: "A*STAR Research Internship",
        description: "Built a GAN-based regression model to predict critical resolved shear stress in high-entropy alloys.",
        image: mpeaImg,
        url: "",
    },
    {
        name: "Identifying Range Residency from Animal Tracking Data",
        subtitle: "HZDR Research Internship",
        description: "Built tree-based models to analyse animal range residency patterns from GPS datasets.",
        image: residencyImg,
        url: "https://docs.google.com/presentation/d/14_5BI1k6dh45tAGgxK2JH4x2ieat8ACB5CY66d3LZbQ/pub?start=false&loop=false&delayms=3000&slide=id.g279179e672e_4_965",
    },

    // --- Hackathons ---
    {
        name: "Simulated Market-Making & Arbitrage Trading Algorithms",
        subtitle: "Hack The Burgh Winning Project",
        description: "Developed trading algorithms in a simulated market; earned a PnL of $23K in 20 mins.",
        image: optiverImg,
        url: "https://docs.google.com/presentation/d/1TvTmirmkErjFoQp1NMz-wO8bNLqeMb8aIwfbcfIIyJg/edit#slide=id.p",
    },
    {
        name: "Viridien Geospatial AI Challenge",
        subtitle: "Hack The Burgh Winning Project",
        description: "Enhanced low-resolution satellite imagery and built a U-Net++ model for land use classification.",
        image: viridienImg,
        url: "https://dorahacks.io/buidl/23546/about",
    },
    {
        name: "Investment Prioritisation Framework for Grid Infrastructure",
        subtitle: "UK Undergraduate Operational Research Challenge, 3rd Place",
        description: "Built a screening framework to prioritise substation upgrade investment across 20,000 candidate sites.",
        image: orcImg,
        url: "https://drive.google.com/file/d/1JJuSLEI2fQKECGKzLEBlWfYNxoXkx83Q/view?usp=sharing",
    },

    // --- Open Source ---
    {
        name: "SymPy Wrapping Geometry Models",
        subtitle: "Google Summer of Code, Mentor",
        description: "Designed musculotendon-wrapping usage examples for SymPy's mechanics module as a GSoC mentor.",
        image: wrappingImg,
        url: "https://summerofcode.withgoogle.com/programs/2025/projects/uvXG3nzX",
    },
    {
        name: "Implementing Specific Forces and Torques",
        subtitle: "Google Summer of Code, Contributor",
        description: "Developed a library of predefined force and torque models in SymPy, including Duffing Spring, Coulomb Friction, and Hill-type muscle models.",
        image: torqueImg,
        url: "https://summerofcode.withgoogle.com/archive/2024/projects/kPT4IkQI",
    },

    // --- Consulting ---
    {
        name: "Volunteer Portal & Database Platform Selection for a Healthcare Nonprofit",
        subtitle: "180 Degrees Consulting, Junior Consultant",
        description: "Evaluated SaaS platforms for a healthcare nonprofit as a 180 Degrees Consulting Junior Consultant.",
        image: hhriImg,
        url: "",
    },

    // --- Independent Build ---
    {
        name: "LungLink Hub",
        subtitle: "Independent Project",
        description: "A full-stack ML web app predicting global lung cancer mortality from socio-economic and health data.",
        image: lunglinkImg,
        url: "https://github.com/eh111eh/LungLink-Hub",
    },
];

const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="project-card" key={idx}>
                                {port.image ? (
                                    <img
                                        src={port.image}
                                        className="project-image"
                                        alt={port.name}
                                    />
                                ) : (
                                    <div className="project-image placeholder" />
                                )}
                                <div className="project-info">
                                    <p className="title">
                                        {port.url ? (
                                            <a href={port.url} target="_blank" rel="noopener noreferrer">
                                                {port.name}
                                            </a>
                                        ) : (
                                            port.name
                                        )}
                                    </p>
                                    {port.subtitle && (
                                        <p className="subtitle">{port.subtitle}</p>
                                    )}
                                    <p className="description">{port.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Projects".split("")}
                        idx={8}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Project;