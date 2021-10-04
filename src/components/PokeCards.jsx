import React from "react";

function PokeCard(PokeData) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <>
      <h1>{PokeData.name}</h1>
      <a href={PokeData.videoLink}>
        <img
          src={PokeData.sprites.front_default || PokeData.sprites.back_default}
          onMouseEnter={(e) =>
            (e.currentTarget.src =
              PokeData.sprites.front_shiny || PokeData.sprites.back_shiny)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.src =
              PokeData.sprites.front_default || PokeData.sprites.back_default)
          }
          alt={PokeData.name}
          onClick={() => openInNewTab(`${PokeData.videoLink}`)}
        />
      </a>
    </>
  );
}

export default PokeCard;
