import { useCallback, useEffect, useState } from "react";
import { CircularProgress, Container, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import AddIcon from "@mui/icons-material/Add";
import { apiEndpoints } from "../../config/api/endpoints";
import {
  HTTP_METHODS,
  prepareFetchHeaders,
} from "../../config/api/configuration";
import { checkResponse } from "../../config/api/error/checkResponse";
import { Deck } from "../../types/deck";
import CardView from "./CardView";
import { Card } from "../../types/card";
import { Draw } from "../../types/draw";
import { initCards } from "./cardsInitData";
import Match from "./Match";
import MatchesView from "./MatchesView";

const Cards = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCardLoading, setCardIsLoading] = useState(false);
  const [deck, setDeck] = useState<Deck | null>(null);
  const [cards, setCards] = useState<Card[]>(initCards);
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    const loadDeck = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          apiEndpoints.NewShuffle.replace(":count", "1"),
          prepareFetchHeaders(HTTP_METHODS.GET)
        );

        checkResponse(response);

        const data = await response.json();
        setDeck(data);
        setRemaining(data.remaining);
      } catch (error) {
        console.log({ error });
      } finally {
        setIsLoading(false);
      }
    };

    loadDeck();
  }, []);

  const drawCard = useCallback(async () => {
    if (deck) {
      setCardIsLoading(true);
      try {
        const response = await fetch(
          apiEndpoints.DrawCard.replace(":id", `${deck.deck_id}`).replace(
            ":count",
            "1"
          ),
          prepareFetchHeaders(HTTP_METHODS.GET)
        );

        checkResponse(response);

        const data: Draw = await response.json();
        if (data?.cards.length) {
          setCards((prevCards) => [...prevCards, data.cards[0]]);
          setRemaining(data.remaining);
        }
      } catch (error) {
        console.log({ error });
      } finally {
        setCardIsLoading(false);
      }
    }
  }, [deck]);

  const { images: firstImages, ...restFirstCard } = cards[cards.length - 2];
  const { images: secondImages, ...restSecondCard } = cards[cards.length - 1];

  return (
    <Container maxWidth="md">
      <Stack alignContent="center" sx={{ pt: 4 }}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          deck && (
            <>
              <Match firstCard={restFirstCard} secondCard={restSecondCard} />
              <Stack
                direction="row"
                justifyContent="space-around"
                sx={{ my: 4 }}
              >
                <CardView imgSrc={firstImages.png} />
                <CardView imgSrc={secondImages.png} />
              </Stack>
              {!!remaining ? (
                <LoadingButton
                  sx={{ alignSelf: "center" }}
                  loading={isCardLoading}
                  loadingPosition="start"
                  startIcon={<AddIcon />}
                  disabled={!deck.deck_id}
                  onClick={drawCard}
                  variant="contained"
                >
                  <span>Draw Card</span>
                </LoadingButton>
              ) : (
                <MatchesView />
              )}
            </>
          )
        )}
      </Stack>
    </Container>
  );
};

export default Cards;
