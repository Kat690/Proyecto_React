import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkeind from "../../svg/linkedin.svg";
import logoYoutube from "../../svg/youtube.svg";

const AboutMe = () => {
    const socialNetworks =[
        {
            name:"Github",
            link:"https://github.com/Kat690",
            logo:logoGithub,
        },
        {
            name:"Linkedind",
            link:"https://www.linkedin.com/in/katherine-del-castillo-aguas-b1391623a",
            logo:logoLinkeind,
        }
    ];

    return (
        <S.ContainerAboutMe id="about-me">
            <S.ContainerFlex>
                <S.ContainerText>
                    <S.Title>
                        <p>👋🏼 Hola, soy</p>
                        <p>Katherine Del Castillo</p>
                        <p>Ingeniera de sistemas</p>
                    </S.Title>
                    <S.DescriptionText>
                    Ingeniera de Sistemas, lider,
                    innovadora, con amplios
                    conocimientos en calidad de software experiencia en
                    testing de software, metodologías agiles,
                    aseguramiento de la información 
                    </S.DescriptionText>
                    <S.ContainerIcons>
                    {socialNetworks.map((network, index)=>(
                        <a
                            key={index}
                            href={network.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={network.logo} alt={network.name}/>
                        </a>
                    ))}
                </S.ContainerIcons>
                </S.ContainerText>
            </S.ContainerFlex>
        </S.ContainerAboutMe>
    );
};
export default AboutMe;