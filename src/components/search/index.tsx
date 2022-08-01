import { Paper, IconButton, InputBase, Divider } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  onChangeInput: any
}


export default function CustomizedSearch({ onChangeInput }: Props) {
  return (
    <Paper
      elevation={5}
      sx={{ p: '2px 4px', display: 'flex', width: '100%' }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
      </IconButton>
      <InputBase
        onChange={(e) => onChangeInput(e.target.value)}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Profiles"
      />
      <IconButton sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}