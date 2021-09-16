import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCavXp8Zs7JDTYi7q_t1gHSrG1RNp27U_E',
  authDomain: 'gantest-ef340.firebaseapp.com',
  projectId: 'gantest-ef340',
  storageBucket: 'gantest-ef340.appspot.com',
  messagingSenderId: '659678987139',
  appId: '1:659678987139:web:5f15bc12a82b9f0229acb6',
  measurementId: 'G-GLG9HKFEEX'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testgant';
}
