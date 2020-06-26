import firebase from 'firebase/app';
import 'firebase/auth';

import mushroomList from '../../components/mushroomList/mushroomList';
import mycologistList from '../../components/mycologistList/mycologistList';

const authDiv = $('#auth');
const forestDiv = $('#forest');
const logoutButton = $('#navbar-logout-button');
const logInButton = $('#google-auth');
const hutDiv = $('#hut');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      forestDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      mushroomList.buildForest();
      mycologistList.buildHut();
      logInButton.addClass('hide');
      hutDiv.removeClass('hide');
    } else {
      authDiv.removeClass('hide');
      forestDiv.addClass('hide');
      logoutButton.addClass('hide');
      logInButton.removeClass('hide');
      hutDiv.addClass('hide');
    }
  });
};

export default {
  checkLoginStatus,
};
