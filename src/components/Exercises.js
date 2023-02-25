import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const Exercises = () => {
  const exercises = [
    {
      id: 1,
      title: "Push-ups",
      description:
        "A classic bodyweight exercise that works the chest, arms, and shoulders.",
      image: "https://source.unsplash.com/featured/?pushups",
    },
    {
      id: 2,
      title: "Squats",
      description:
        "A compound exercise that works multiple muscle groups, including the quads, hamstrings, and glutes.",
      image: "https://source.unsplash.com/featured/?squats",
    },
    {
      id: 3,
      title: "Lunges",
      description:
        "A compound exercise that works multiple muscle groups, including the quads, hamstrings, and glutes.",
      image: "https://source.unsplash.com/featured/?lunges",
    },
    {
      id: 4,
      title: "Plank",
      description:
        "A simple yet effective exercise that works the core muscles.",
      image: "https://source.unsplash.com/featured/?plank",
    },
    {
      id: 5,
      title: "Crunches",
      description: "Another great exercise for the core muscles.",
      image: "https://source.unsplash.com/featured/?crunches",
    },
    {
      id: 6,
      title: "Burpees",
      description:
        "A full-body exercise that works multiple muscle groups and gets your heart rate up.",
      image: "https://source.unsplash.com/featured/?burpees",
    },
    // add more exercises here
  ];

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {exercises.map((exercise) => (
        <Card key={exercise.id} sx={{ maxWidth: 345, m: 2 }}>
          <div style={{ height: 200, overflow: "hidden" }}>
            <img
              src={exercise.image}
              alt={exercise.title}
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {exercise.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {exercise.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Exercises;
