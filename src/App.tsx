import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { TextField, Button, Container, Typography, Snackbar } from '@mui/material';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name && phone && email) {
      localStorage.setItem('userDetails', JSON.stringify({ name, phone, email }));
      setIsFormSubmitted(true);
    }
  };

  const handleSnackbarClose = () => {
    setIsFormSubmitted(false);
  };

  return (
    <Container maxWidth="sm">
      <Router>
        <Routes>
        <Route path="/">
          <Typography variant="h5" component="h2" gutterBottom>
            User Information
          </Typography>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </Route>
        <Route path="/second-page">
          {isFormSubmitted ? (
            <Typography variant="h5" component="h2">
              Welcome to the Second Page!
            </Typography>
          ) : (
            <Navigate to="/" />
          )}
        </Route>
        </Routes>
      </Router>
      <Snackbar open={isFormSubmitted} autoHideDuration={3000} onClose={handleSnackbarClose}>
        <Typography variant="body2">User details saved! Redirecting to the second page...</Typography>
      </Snackbar>
    </Container>
  );
};

export default App;
