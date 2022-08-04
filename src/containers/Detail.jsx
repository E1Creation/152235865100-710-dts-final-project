import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useDealLookUpQuery } from "../services/api/GamesAPI";

const Detail = () => {
  const { dealID } = useParams();
  const { data, error, isLoading } = useDealLookUpQuery(dealID);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {error ? (
        <>Sedang Error</>
      ) : isLoading ? (
        <Loading />
      ) : (
        <>
          <CardMedia
            component={"img"}
            src={data.gameInfo?.thumb}
            alt={data.gameInfo?.name}
          />
          <Box>
            <Typography variant="h3">{data.gameInfo?.name}</Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Detail;
