import React, { useState } from "react"
import styled from "styled-components"
import { Elements } from "react-stripe-elements"

import BiographyModal from "../components/biographyModal"
import PrintPurchaseModal from "../components/printPurchaseModal"

const PrintProjectCard = ({
  className,
  image,
  title,
  artist,
  skuId,
  total,
  quantity,
  children,
}) => {
  const [bio, setBio] = useState("")
  const [biographyModalIsOpen, setBiographyModalIsOpen] = useState(false)
  const [printPurchaseModalIsOpen, setPrintPurchaseModalIsOpen] = useState(
    false
  )

  const openBioModal = artist => {
    setBiographyModalIsOpen(true)

    if (artist === "Cey Adams") {
      setBio(
        <div>
          <h1>{artist}</h1>
          <p>
            Cey Adams, a New York City native, emerged from the downtown
            graffiti movement to exhibit alongside fellow artists Jean-Michel
            Basquiat and Keith Haring. He appeared in the historic 1982 PBS
            documentary Style Wars which tracks subway graffiti in New York.
          </p>
          <p>
            As the Creative Director of hip hop mogul Russell Simmons’ Def Jam
            Recordings, he co-founded the Drawing Board, the label’s in-house
            visual design firm, where he created visual identities, album
            covers, logos, and advertising campaigns for Run DMC, Beastie Boys,
            LL Cool J, Public Enemy, Notorious B.I.G., Maroon 5, and Jay-Z. He
            exhibits, lectures and teaches art workshops at institutions
            including: MoMA, Brooklyn Museum, Museum of the City of New York,
            New York University, Bemis Center for Contemporary Arts, Walker Art
            Center, MoCA Los Angeles, Pratt Institute, Stamford University,
            Howard University, Atlanta Contemporary Art Center, High Museum,
            Brooklyn Academy of Music, and Mount Royal University and The
            University of Winnipeg in Canada. He co-authored DEFinition: The Art
            and Design of Hip-Hop, published by Harper-Collins; and designed Def
            Jam Recordings: The First 25 Years of the Last Great Record Label,
            published by Rizzoli.
          </p>
          <p>
            Cey’s work explores the relationship between transformation and
            discovery. His practice involves dismantling various imagery and
            paper elements to build multiple layers of color, texture, shadow,
            and light. Cey draws inspiration from 60’s pop art, sign painting,
            comic books, and popular culture. His work focuses on themes
            including pop culture, race and gender relations, cultural and
            community issues.
          </p>
        </div>
      )
    } else if (artist === "Juan Carlos Pinto") {
      setBio(
        <div>
          <h1>{artist}</h1>
          <p>
            Juan Carlos Pinto is an artist and art historian working in New York
            City. For the past 12 years, Juan Carlos has made Brooklyn his home
            . A native of Guatemala, his art is as expressive as the colorful
            and lush Central American nation.
          </p>
          <p>
            Pinto’s artwork is poignantly aggressive and projects a
            revolutionary declaration. The scope of his art covers abstract
            painting, tile work, wood work, stencil spray, the use of
            non-biodegradable plastic and glass. Most of Pinto’s media comes
            from salvaged material and found objects. Pinto’s use of plastic is
            unique and pulsates with hidden significance.
          </p>
          <p>
            Issues such as human and animal rights, environmental preservation,
            and empowerment of minorities are frequently incorporated into
            Pinto’s work. He is currently planning a series of murals and public
            art in Brooklyn, New York. Pinto’s art exudes confidence, energy and
            challenge. It draws one into a dual world of playfulness and social
            responsibility. His legacy, as he sees it, is to be known as an
            artist who demands change to a Green Revolution.
          </p>
        </div>
      )
    } else if (artist === "Choichun Leung") {
      setBio(
        <div>
          <h1>{artist}</h1>
          <p>
            Choichun Leung is an artist from Wales, UK now living in Brooklyn,
            NY.
          </p>
          <p>
            In 2013 Leung began a series of personal autobiographical drawings,
            this accumulation of work was the beginning of ‘The Young Girl
            Project’ a visual narrative of a childhood marked by sexual abuse
            and the lasting effects on her as a young girl and adult.
          </p>
          <p>
            The drawings were first seen by friends who began sharing their own
            experiences of abuse. The power of art as a tool for instigating
            dialogue for advocacy and empowerment began to manifest.
          </p>
          <p>
            What began as a single sketch has since grown into a
            multi-disciplinary art project involving drawings, paintings, film,
            books, activism and collaborations that gives voice to the silent
            child.
          </p>
          <p>
            Its aim is to raise awareness and break the silence around a taboo
            subject and involve young adults and children into that
            conversation. In 2018 Leung partnered with Lux Capta films (First
            Reformed) as subject/producer of ‘The Art Of Survival’, a mixed
            media documentary currently in production.
          </p>
          <p>‘The Young Girl Project’ is now a non-profit organization.</p>
        </div>
      )
    } else {
      setBio(`<p>Can't find artist bio.</p>`)
    }
  }

  return (
    <div className={className}>
      <div className="image-frame">
        <img src={image} alt={`${title} - ${artist}`} />
      </div>
      <div>
        <h2>{title}</h2>
        <strong>
          <span className="bio-link" onClick={() => openBioModal(artist)}>
            {artist}
          </span>
        </strong>
        {children}
      </div>
      <div className="btn-wrapper">
        <button onClick={() => setPrintPurchaseModalIsOpen(true)}>
          Buy Now!
        </button>
        <p className="free-shipping-info">
          ** {quantity} prints for ${total} each. <br />
          Free shipping worldwide.
        </p>
      </div>

      <BiographyModal
        isOpen={biographyModalIsOpen}
        closeModal={() => setBiographyModalIsOpen(false)}
        bio={bio}
      />
      <Elements>
        <PrintPurchaseModal
          isOpen={printPurchaseModalIsOpen}
          closeModal={() => setPrintPurchaseModalIsOpen(false)}
          skuId={skuId}
          title={title}
          total={total}
        />
      </Elements>
    </div>
  )
}

const StyledPrintProjectCard = styled(PrintProjectCard)`
  margin: 1rem 0;
  flex: 0 0 100%;
  @media (min-width: 600px) {
    flex: 0 0 49%;
  }
  @media (min-width: 1000px) {
    flex: 0 0 31%;
  }

  .image-frame {
    display: flex;
    justify-content: center;
    height: 300px;
    width: 100%;
    border: 12px solid black;
    padding: 2rem;
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.4),
      1px 1px 7px rgba(0, 0, 0, 0.4);

    img {
      display: inline-block;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      border: 1px inset #eee;
    }
  }

  h2 {
    margin: 1rem 0 0;
  }
  p {
    margin: 0;
    font-size: 0.85rem;
  }

  .bio-link {
    color: rgb(28, 116, 204);
    cursor: pointer;
    text-decoration: none;
    transition: color 0.4s;
    :hover {
      color: rgb(92, 167, 241);
      text-decoration: underline;
    }
  }

  .btn-wrapper {
    margin-top: 1rem;
    display: flex;
    .free-shipping-info {
      color: #aaa;
      font-style: italic;
      line-height: 1.2;
      margin-left: 1rem;
      margin-top: 2px;
    }
  }
`

export default StyledPrintProjectCard
