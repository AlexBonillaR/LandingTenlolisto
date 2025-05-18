import { Button } from '@mui/material';

const CustomButton = ({ children, variant = "contained", color = "primary", startIcon, endIcon, ...props }) => {
    return (
        <Button
            variant={variant}
            color={color}
            startIcon={startIcon}
            endIcon={endIcon}
            sx={{
                padding: '12px 30px',
                borderRadius: '30px',
                fontSize: '20px',
                textTransform: 'capitalize',
                ...props.sx
            }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default CustomButton;
