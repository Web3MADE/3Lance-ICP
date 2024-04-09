"use client";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
interface JobCardProps {
  onClick: () => void;
}

export default function JobCard({ onClick }: JobCardProps) {
  return (
    <Card
      sx={{
        ":hover": {
          boxShadow: 10,
          cursor: "pointer",
        },
      }}
    >
      <CardActionArea onClick={onClick}>
        <CardHeader title="Web3 Fullstack Engineer"></CardHeader>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="body2" component="div">
            Job posting for Web3 fullstack Engineer. Specializing in React,
            Solidity, and Account Abstraction...
          </Typography>

          <CardActions
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              pl: 0,
              color: "gray",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeIcon sx={{ fontSize: "12px" }} />
              <Typography sx={{ fontSize: "12px" }}>Today</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SignalCellularAltIcon sx={{ fontSize: "12px" }} />
              <Typography sx={{ fontSize: "12px" }}>Expert</Typography>
            </Box>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
