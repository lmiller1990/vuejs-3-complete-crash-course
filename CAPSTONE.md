+----------------------------------+
| Title                            |
+----------+-----------------------+
| album #1 | Photos                |   
| album #2 |                       |   
| album #3 |                       |   
| album #4 |                       |   
| album #5 |                       |   
+----------+-----------------------+

+----------------------------------+
| <slot> header                    |
+----------+-----------------------+
| <slot>   | <slot> content        |   
| sidebar  |                       |   
|          |                       |   
|          |                       |   
|          |                       |   
+----------+-----------------------+

button {
  background: darkcyan;
  color: white;
  border: none;
  margin: 5px;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  transition: .1s;
}

button:hover {
  filter: brightness(120%);
  cursor: pointer;
  transition: .1s;
}

