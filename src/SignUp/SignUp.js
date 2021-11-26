import React from 'react';
import styles from './SignUP.module.css';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
{
  /* import React from 'react';
import styles from './Login.module.css';
import styles1 from '../Navbar/Navbar.module.css'; */
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 2,
  minHeight: '600px',
  minWidth: '430px',
  borderRadius: '30px',
  fontWeight: '900',
  overflow: 'hidden',
};

const useStyles = makeStyles((theme) => ({
  myClassName: {
    '&:hover': {
      backgroundColor: '#d3cfd0',
    },
  },
}));

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  age: yup.string().required(),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  return (
    <div>
      <span className={styles.signuptxt} onClick={handleOpen}>
        Signup
      </span>
      <Modal
        open={open}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            onClick={handleClose}
            display='flex'
            justifyContent='flex-end'
          >
            <IconButton color='inherit' className={classes.myClassName}>
              <CloseIcon
                sx={{
                  position: 'relative',
                  bottom: '1px',
                  right: '0px',
                  stroke: 'black',
                  strokeWidth: '1',
                }}
              />
            </IconButton>
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            <form
              onSubmit={handleSubmit(onSubmitHandler)}
              className={styles.form}
            >
              <div>
                <PinterestIcon
                  className={styles.logo}
                  sx={{
                    width: 40,
                    height: 40,
                    position: 'relative',
                    bottom: '20px',
                  }}
                />
              </div>
              <h2 className={styles.headertxt}>Welcome to Pinterest</h2>
              <span className={styles.headertxt2}>Find new ideas to try</span>
              <br />

              <input
                {...register('email')}
                placeholder='Email'
                type='email'
                required
                className={styles.input}
              />

              <p>{errors.email?.message}</p>
              <br />

              <input
                {...register('password')}
                placeholder='password'
                type='password'
                required
                className={styles.inputPass}
              />

              <p>{errors.password?.message}</p>
              <br />

              <input
                {...register('age')}
                placeholder='Age'
                type='age'
                required
                className={styles.inputAge}
              />
              <br />

              <div className={styles.logintxt}>Continue</div>
            </form>
            <div className={styles.orTxt}>
              <span className={styles.Txt}>Or</span>

              <span className={styles.facebook}>
                <FacebookRoundedIcon
                  sx={{
                    color: '#fff',
                    marginRight: '8px',
                  }}
                />
                Connect With Facebook
              </span>

              <span className={styles.google}>
                <GoogleIcon
                  sx={{
                    fontSize: '20px',
                    marginRight: '8px',
                  }}
                />
                Connect With Google
              </span>
              <span className={styles.acknowledge}>
                By continuing, you agree to Pinterest's
              </span>
              <span className={styles.termsText}>
                <a
                  href='/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.terms}
                >
                  Terms of Service
                </a>
                <span className={styles.acknowledge}>
                  and acknowledge that you've read
                </span>
              </span>
              <span>
                <span className={styles.privacy}>our</span>
                <a
                  href='/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.terms}
                >
                  Privacy Policy
                </a>
              </span>

              <span className={styles.footerTxt}>
                <span>Already a member? Log in</span>
                <span className={styles.getStartedTxt}>
                  Are you a business? Get started here!
                </span>
              </span>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default SignUp;
