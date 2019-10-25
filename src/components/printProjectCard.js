import React, { useState } from "react"
import styled from "styled-components"

import BiographyModal from "./biographyModal"

const PrintProjectCard = ({
  className,
  image,
  title,
  artist,
  id,
  total,
  quantity,
  children,
  addToCart,
}) => {
  const [bio, setBio] = useState("")
  const [biographyModalIsOpen, setBiographyModalIsOpen] = useState(false)

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
    } else if (artist === "Karma Phuntsok") {
      setBio(
        <div>
          <h1>{artist}</h1>
          <p>
            Karma Phuntsok fled Tibet with his family after the uprising against
            the Chinese in 1959, escaping into India as refugees. He studied
            drawing and painting through his school years in India. In 1973
            Karma studied thanka painting with a master of traditional Tibetan
            thanka painting in Nepal. Since then he has been making paintings
            based on Tibetan Buddhist deities.
          </p>
          <p>
            In 1981 Karma migrated to Australia and now lives in the bush north
            of Kyogle with his wife and son.
          </p>
          <p>
            Karma's paintings are collected worldwide and published in various
            books and magazines. His recent paintings are mostly experiments,
            interweaving traditional techniques and symbols, with modern
            inspirations.
          </p>
        </div>
      )
    } else if (artist === "Tsewang Lhamo") {
      setBio(
        <div>
          <h1>{artist}</h1>
          <p>
            Tsewang Lhamo is a graphic design student at Baruch College in New
            York City. She was born in Nepal but grew up in South India. She is
            influenced by pop art particularly Paula Scher and Andy Warhol her
            Tibetan diaspora experience is also a source of inspiration. Tsewang
            is the co-founder of Yakpo Collective. An art collective dedicated
            to the Tibetan contemporary art movement and culture. Aside from
            graphic design, she enjoys photography and painting and hopes to
            launch a sustainable clothing brand some day.
          </p>
        </div>
      )
    } else if (artist === "Jon Marro") {
      setBio(
        <div>
          <h1>{artist}</h1>

          <p>
            In Marro's own words, his art is meant to be 'a sanctuary for the
            eyes'. The images are inspired by the environment, the natural world
            and a strong and a deep spiritual dimension. He builds up his
            subjects through a thick accumulation of lines and a rich and bright
            use of color. With incredible attention to detail, his works share
            something with psychedelic art, but also release a sense of calm and
            harmony. Through his artistic practice, Marro has learned to
            treasure patience and diligence.
          </p>
          <p>
            The artist started his creative path as the founder of Blend
            Apparel, a company that produces T-shirts in an ethically
            responsible way, and also founded his studio Fire Hydrant.
            Meanwhile, he worked as a designer creating works for fellow
            musicians, and illustrating books and posters for movies.
          </p>
          <p>
            After leaving Blend Apparel in 2011, Marro has focused on what he
            calls Solar Art, a creative practice driven by his deep commitment
            with the sacred force of love.
          </p>
          <p>
            Considering that Marro says 'my absolute medium is Spirit', it does
            not come as a surprise that he also leads transformational workshops
            all over the world.
          </p>
          <p>
            <a
              href="http://jonmarro.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              jonmarro.com
            </a>
          </p>
        </div>
      )
    } else {
      setBio(<p>Artist bio not available.</p>)
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
        <button
          onClick={() =>
            addToCart({
              title,
              artist,
              id,
              total,
              quantity: 1,
            })
          }
        >
          Add to Cart
        </button>
        <p className="shipping-info">
          * ${total} each + shipping
          <br />
          <strong>Shipping:</strong> US: $10&nbsp; Int: $15
        </p>
      </div>

      <BiographyModal
        isOpen={biographyModalIsOpen}
        closeModal={() => setBiographyModalIsOpen(false)}
        bio={bio}
      />
    </div>
  )
}

const StyledPrintProjectCard = styled(PrintProjectCard)`
  margin: 1.5rem 0.75rem;
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
    button {
      flex: 1;
    }
  }

  .shipping-info {
    color: #aaa;
    font-style: italic;
    line-height: 1.2;
    margin-left: 1rem;
    margin-top: 2px;
  }
`

export default StyledPrintProjectCard
