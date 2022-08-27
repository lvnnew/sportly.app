import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "80px",
        paddingBottom: "40px",
        background: "#0D1821",
        width: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: "100%",
          padding: "40px 20px 10px 20px",
          marginTop: "40px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "24px", md: "40px" },
            fontWeight: "700",
            color: "#fff",
            border: "1px solid #fff",
            padding: { xs: "10px 10px", md: "10px 20px" },
            textTransform: "uppercase",
          }}
        >
          Контакты
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          color: "#fff",
          marginTop: "80px",
        }}
      >
        <Box>
          <Typography>© ИП Манапова Анна Сергеевна </Typography>
          <Typography>ИНН 422378228785 </Typography>
          <Typography>ОГРН 321420500002932 </Typography>
          <Typography>Договор оферты </Typography>
        </Box>
        <Box>
          <Typography sx={{ padding: "10px" }}>
            г. Москва, ул. Петра Алексеева, д. 12{" "}
          </Typography>
          <Typography sx={{ padding: "10px" }}>
            Телефон: +7-(977)-897-23-46{" "}
          </Typography>
          <Typography sx={{ padding: "10px" }}>
            Email: annykarimova@gmail.com{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
