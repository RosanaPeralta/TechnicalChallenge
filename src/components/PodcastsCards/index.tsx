import { Grid, CardContent, CardMedia, Typography, Link } from "@mui/material";
import {
  Container,
  StyledCard,
  StyledTypography,
  StyledCardActions,
} from "./styles";
import { PodcastInformation } from "../../interfaces";

const PodcastsCards = ({ podcasts }: any) => {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {podcasts &&
          podcasts.map((elem: PodcastInformation) => (
            <Grid item xs={3} key={elem.id}>
              <StyledCard>
                <CardMedia
                  component="img"
                  alt={elem.title}
                  image={elem.image}
                />
                <CardContent>
                  <StyledTypography gutterBottom>
                    {elem.title.length > 30
                      ? elem.title.slice(0, 30) + "..."
                      : elem.title}
                  </StyledTypography>
                  <Typography variant="body2" color="text.secondary">
                    {elem.description.length > 100
                      ? elem.title.slice(0, 38) + "..."
                      : elem.title}
                  </Typography>
                </CardContent>
                <StyledCardActions>
                  <Link
                    underline="none"
                    target="_blank"
                    href={elem.url}
                    rel="noopener"
                    fontFamily={'"Roboto","Helvetica","Arial"'}
                    textTransform={"uppercase"}
                    color={"#9896f0"}
                  >
                    Access to the RSS
                  </Link>
                </StyledCardActions>
              </StyledCard>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default PodcastsCards;
