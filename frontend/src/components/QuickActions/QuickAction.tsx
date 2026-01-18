import React from "react";
import { Box, Typography, Button, Stack, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BookIcon from "@mui/icons-material/Book";
import EditIcon from "@mui/icons-material/Edit";

type QuickActionProps = {
  onAddRoomClick?: () => void;
  onCreateBookingClick?: () => void;
  onBulkEditClick?: () => void;
};

const QuickAction: React.FC<QuickActionProps> = ({
  onAddRoomClick,
  onCreateBookingClick,
  onBulkEditClick,
}) => {
  return (
    <Box
      sx={{
        p: 2.5,
        mb: 2,
        mt: 4,
        borderRadius: 2,
        border: "1px solid #eef0f3",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h6" fontWeight={600} color="#111927" mb={2}>
        Быстрые действия
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        {/* Добавить аудиторию */}
        <Paper
          sx={{
            p: 3,
            borderRadius: 2,
            boxShadow: "none",
            border: "1px solid #E5E7EB",
            bgcolor: "white",
            flex: 1,
            "&:hover": { borderColor: "#D1D5DB" },
          }}
        >
          <Button
            component="div"
            fullWidth
            onClick={onAddRoomClick}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
              p: 0,
              textTransform: "none",
              color: "inherit",
              "&:hover": { bgcolor: "transparent" },
            }}
          >
            <Box
              sx={{
                bgcolor: "#F0F9FF",
                color: "#026AA2",
                width: 48,
                height: 48,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <AddIcon fontSize="small" />
            </Box>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              color="#111927"
              gutterBottom
            >
              Добавить аудиторию
            </Typography>
            <Typography variant="body2" color="#6C737F">
              Создать новую аудиторию
            </Typography>
          </Button>
        </Paper>

        {/* Создать бронирование */}
        <Paper
          sx={{
            p: 3,
            borderRadius: 2,
            boxShadow: "none",
            border: "1px solid #E5E7EB",
            bgcolor: "white",
            flex: 1,
            "&:hover": { borderColor: "#D1D5DB" },
          }}
        >
          <Button
            component="div"
            fullWidth
            onClick={onCreateBookingClick}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
              p: 0,
              textTransform: "none",
              color: "inherit",
              "&:hover": { bgcolor: "transparent" },
            }}
          >
            <Box
              sx={{
                bgcolor: "#ECFDF3",
                color: "#0B7A5B",
                width: 48,
                height: 48,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <BookIcon fontSize="small" />
            </Box>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              color="#111927"
              gutterBottom
            >
              Создать бронирование
            </Typography>
            <Typography variant="body2" color="#6C737F">
              Забронировать аудиторию
            </Typography>
          </Button>
        </Paper>

        {/* Массовое редактирование */}
        <Paper
          sx={{
            p: 3,
            borderRadius: 2,
            boxShadow: "none",
            border: "1px solid #E5E7EB",
            bgcolor: "white",
            flex: 1,
            "&:hover": { borderColor: "#D1D5DB" },
          }}
        >
          <Button
            component="div"
            fullWidth
            onClick={onBulkEditClick}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
              p: 0,
              textTransform: "none",
              color: "inherit",
              "&:hover": { bgcolor: "transparent" },
            }}
          >
            <Box
              sx={{
                bgcolor: "#FFFAEB",
                color: "#B54708",
                width: 48,
                height: 48,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <EditIcon fontSize="small" />
            </Box>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              color="#111927"
              gutterBottom
            >
              Массовое редактирование
            </Typography>
            <Typography variant="body2" color="#6C737F">
              Изменить несколько аудиторий
            </Typography>
          </Button>
        </Paper>
      </Stack>
    </Box>
  );
};

export default QuickAction;
