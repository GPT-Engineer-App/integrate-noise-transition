import React, { useState } from "react";
import { Container, Button, Box, useBoolean } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const NoiseOverlay = () => {
  const [show, setShow] = useBoolean(false);

  const noiseStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `url("data:image/gif;base64,R0lGODlhEAAQAKIAAAAAAP///93d3fLy8u7u7vHx8SH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOgZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwmbZFAcAggo5b2Y7DfwGECgjjYkAAAh+QQJCgAAACwAAAAAEAAQAAADMi63P5nX8GjiD9ZLc9d14wQDBGi1ArVIYbN7G7h8BEPKpWqXM+iUQJx4OpR8JcQgAxh0fjQAAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlQqB1rGZzR2q1TLZ8xjJyFe0Jefx2FeYRiRbILfheohcQgAxh0RQAAIfkECQoAAAAsAAAAABAAEAAAAzMIumILNgF0uDIjK8pB+JlM6Rq1oNj2DSTl3bMVHNhn8sJcKgKbZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0qNDEsQD3G4iip9Y7Rha3sVh6Q5Y6Zp8JyrTZ37vh8CQFADs=")`,
    zIndex: 9999,
    opacity: 0.5,
    pointerEvents: "none", // Allows clicks to pass through
    display: show ? "block" : "none",
  };

  return (
    <Container position="relative" centerContent maxW="container.md" height="100vh">
      <Button leftIcon={<FaRocket />} colorScheme="teal" onClick={setShow.toggle}>
        Toggle Noise Effect
      </Button>
      <Box style={noiseStyle} />
    </Container>
  );
};

export default NoiseOverlay;
