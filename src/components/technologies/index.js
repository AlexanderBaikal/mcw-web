import React from "react"
import Technology from "./technology"
import { graphql, useStaticQuery } from "gatsby"
import { Title } from "./Technologies"
import { labelData } from "./labelData"
import './techs.css'

const Technologies = () => {
    const data = useStaticQuery(graphql`
      query {
        allFile(filter: { relativePath: { regex: "images/technologies/" } }) {
          edges {
            node {
              id
              base
              publicURL
            }
          }
        }
      }
    `)
    return (
        <div>
            <Title>Technologies</Title>
            <div className="techs">
                {data.allFile.edges.map(edge => (
                    <Technology
                        key={edge.node.publicURL}
                        img={edge.node.publicURL}
                        title={labelData[edge.node.base.split(".")[0]]?.title}
                        color={labelData[edge.node.base.split(".")[0]]?.color}
                    />
                ))}
            </div>
        </div>
    )
}

export default Technologies



