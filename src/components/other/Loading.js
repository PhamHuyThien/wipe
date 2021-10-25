import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

function Loading() {
    const loading = useSelector((state) => state.loading);
    return (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading.open}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}

export default Loading;