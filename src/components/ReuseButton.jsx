import { Button } from "@mui/material"

export const ReuseButton = ({ children, variant = "contained", color = "primary", sx = {} }) => {
      return (
            <Button variant={variant} color={color} sx={sx}>
                  {children || "Save"}
            </Button>
      )
}
