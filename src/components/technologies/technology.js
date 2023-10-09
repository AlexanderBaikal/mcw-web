import React from "react"

const Technology = ({ img, title, color = "#000" }) => {
    console.log(title)
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "fit-content",
            }}
        >
            <img
                src={img}
                alt={title}
                style={{ marginBottom: "13px", maxHeight: "43px" }}
            />
            <div
                style={{
                    fontSize: "19px",
                    fontWeight: "500",
                    color,
                }}
            >
                {title}
            </div>
        </div>
    )
}

export default Technology