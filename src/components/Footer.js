import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: '#d2691e', color: '#fff', p: 4, mt: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: 1200, mx: 'auto' }}>
        <Box sx={{ flex: '1 1 200px', m: 1 }}>
          <Typography variant="h6" gutterBottom>
            🔗 Quick <Box component="span" sx={{ borderBottom: '2px solid #fff' }}>Links</Box>
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
            <li><Link href="/about" underline="none" sx={{ color: '#fff' }}>About Us</Link></li>
          </Box>
        </Box>
        <Box sx={{ flex: '1 1 200px', m: 1 }}>
          <Typography variant="h6" gutterBottom>
            🔗 Other <Box component="span" sx={{ borderBottom: '2px solid #fff' }}>Links</Box>
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
            <li><Link href="/natural-farming" underline="none" sx={{ color: '#fff' }}>Natural Farming</Link></li>
            <li><Link href="/events" underline="none" sx={{ color: '#fff' }}>Sewa Work</Link></li>
            <li><Link href="/donate" underline="none" sx={{ color: '#fff' }}>Donate</Link></li>
            <li><Link href="/privacy-policy" underline="none" sx={{ color: '#fff' }}>Privacy Policy</Link></li>
            <li><Link href="/terms-of-use" underline="none" sx={{ color: '#fff' }}>Terms of Use</Link></li>
            <li><Link href="/contact" underline="none" sx={{ color: '#fff' }}>Contact Us</Link></li>
          </Box>
        </Box>
        <Box sx={{ flex: '1 1 200px', m: 1 }}>
          <Typography variant="h6" gutterBottom>
            🔗 Contact <Box component="span" sx={{ borderBottom: '2px solid #fff' }}>Details</Box>
          </Typography>
          <Typography component="address" sx={{ fontStyle: 'normal' }}>
            <strong>Kalinga Ashram</strong><br />
            Amania pada, Post- Kankia, Tamana, Tikit road, pin- 761008<br />
            <span>✉️ <Link href="mailto:kalingashram.1999@gmail.com" sx={{ color: '#fff' }}>kalingashram.1999@gmail.com</Link></span><br />
          </Typography>
        </Box>
        <Box sx={{ flex: '1 1 200px', m: 1 }}>
          <Typography variant="h6" gutterBottom>
            📰 News <Box component="span" sx={{ borderBottom: '2px solid #fff' }}>Letter</Box>
          </Typography>
          <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', mb: 2 }}>
            <TextField
              type="email"
              placeholder="E-Mail Id"
              variant="outlined"
              size="small"
              sx={{ bgcolor: '#fff', borderRadius: 1, mr: 1, flexGrow: 1 }}
            />
            <Button variant="contained" sx={{ bgcolor: '#fff', color: '#d2691e' }}>
              Subscribe
            </Button>
          </Box>
          {/* <Typography variant="h6" gutterBottom>
            Get In Touch
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton href="https://facebook.com" target="_blank" aria-label="Facebook" sx={{ color: '#fff' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://youtube.com" target="_blank" aria-label="YouTube" sx={{ color: '#fff' }}>
              <YouTubeIcon />
            </IconButton>
          </Box> */}
        </Box>
      </Box>
      <Box sx={{ textAlign: 'center', mt: 4, borderTop: '1px solid #fff', pt: 1, fontWeight: 'bold' }}>
        Regd. No-GJM No 7640-92 Of 2007-2008 Under Societies Registration Act XXI of 1860 <br></br>
        Kalinga Ashram
      </Box>
    </Box>
  );
}

export default Footer;
