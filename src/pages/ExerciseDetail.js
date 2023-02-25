import React, { useState } from "react";
import Popup from "./Popup";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const exercises = [
  {
    id: 1,
    title: "Push-ups",
    description:
      "A classic bodyweight exercise that works the chest, arms, and shoulders.",
    image: "https://source.unsplash.com/featured/?pushups",
    category: "Strength",
  },
  {
    id: 2,
    title: "Squats",
    description:
      "A compound exercise that works multiple muscle groups, including the quads, hamstrings, and glutes.",
    image: "https://source.unsplash.com/featured/?Squats",
    category: "Strength",
  },
  {
    id: 3,
    title: "Plank",
    description: "An isometric exercise that strengthens the core muscles.",
    image: "https://source.unsplash.com/featured/?Plank",
    category: "Core",
  },
  {
    id: 4,
    title: "Crunches",
    description:
      "A basic abdominal exercise that targets the rectus abdominis.",
    image: "https://source.unsplash.com/featured/?Crunches",
    category: "Core",
  },
  {
    id: 5,
    title: "Lunges",
    description:
      "A lower body exercise that works the quads, glutes, and hamstrings.",
    image: "https://source.unsplash.com/featured/?Lunges",
    category: "Strength",
  },
  {
    id: 6,
    title: "Burpees",
    description:
      "A full body exercise that combines multiple movements into one.",
    image: "https://source.unsplash.com/featured/?Burpees",
    category: "Cardio",
  },
];

const ExerciseDetail = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleCardClick = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const renderExerciseCard = (exercise) => (
    <Grid item xs={12} sm={6} md={4} key={exercise.id}>
      <Card onClick={handleCardClick}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={exercise.image}
            alt={exercise.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {exercise.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {exercise.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );

  const groupedExercises = exercises.reduce((acc, exercise) => {
    if (!acc[exercise.category]) {
      acc[exercise.category] = [];
    }
    acc[exercise.category].push(exercise);
    return acc;
  }, {});

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "Poppins, sans-serif",
            color: "#3A1212",
            textTransform: "uppercase",
            fontSize: "3rem",
            fontWeight: "bold",
            animation: "pulse 1s infinite",
          }}
        >
          <span>Exercises</span>
          <span style={{ marginLeft: "16px", color: "#FF2625" }}>
            Do exercise and enjoy the glow of good health
          </span>
        </Typography>

        <Grid container spacing={4}>
          {Object.keys(groupedExercises).map((category) => (
            <React.Fragment key={category}>
              <Grid item xs={12}>
                <Typography variant="h4" component="h2" gutterBottom>
                  {category}
                </Typography>
              </Grid>
              {groupedExercises[category].map(renderExerciseCard)}
            </React.Fragment>
          ))}
        </Grid>
        {popupOpen && <Popup handleClose={handleClosePopup} />}
      </Container>
    </Box>
  );
};

export default ExerciseDetail;