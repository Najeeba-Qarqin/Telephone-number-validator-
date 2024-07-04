# Telephone-number-validator 🚀

## Project Description 📝

> Phone number validator project created in HTML, CSS and javaScript it can check the number is valid or not.

- It can check the valid numbers.
- From this project i learned how to use javaScript in projects and javaScript regular experssions.
- The style and accessibility of this project make's it stand out.

### HTML:
```html

  <header>
    Telephone Number Validator
  </header>
  <div class="container">
    <div>
    <label for="number">Enter a Phone Number:</label>
    <input type="tel" name="tellPhoneNumber" id="user-input">
  </div>
    <div id="results-div"></div>
    <div class="button">
      <button class="check" id="check-btn">Check</button>
      <button class="clear" id="clear-btn">Clear</button>
    </div>
  </div>

```
### CSS:
```css

.container {
  background: url(images/istockphoto-1502787671-612x612.jpg);
  background-position: center;
  background-size: cover;
  height: 400px;
  width: 190px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 5px;
}

.container label {
  color: black;
  margin: 20px 10px 5px;
  font-weight: 800;
  font-size: 12px;
}

```
### JS:
```javascript


const numbervalid = () => {
  const validnumbers = [
    /^\d{3}-\d{3}-\d{4}$/,
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \d{3} \d{3} \d{4}$/,
    /^1 \d{3}\d{3}\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^\d{10}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/
  ]
  const match = validnumbers.some((number) => number.test(userInput.value));
}

```

## Demo 📸

![Demo](/images/demo.png)

## Technologies Used 🛠️

- HTML
- CSS
- JavaScript

## Features ⭐

- Building Telephone number converter.

## Author 👩‍💻


- LinkedIn: [najeeba-qarqin](https://www.linkedin.com/in/najeeba-qarqin-5419502ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
- Email: [najeebaqarqin](najeebaqarqin@gmail.com)
- GitHub: [Najeeba_Qarqin](https://github.com/Najeeba-Qarqin)
