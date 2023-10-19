import { getPage } from "../../shared/lib"
import { Button } from "../../shared/button" 

export default () => {
  return getPage({
    title: "О нас",
    body: `
      <h1>Главная</h1>
      $Button(props){
      label: "Тест",
      extraAttrs: {
          "data-js-require": true,
          "id": "btn"
      },
      extraClasses: {
          isHidden: true,
          isDisabled: true,
      }
  })}
      <nav>
        <ul>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/about.html">О Нас</a>
          </li>
        </ul>
      </nav>
    `
  })
}
