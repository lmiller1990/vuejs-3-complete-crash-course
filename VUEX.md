+-------------------------+
| Vuex - State Management |
+-------------------------+

```html
<app>
  <layout>
    <top-menu>
      <router-link to="/logout" v-if="authenticated">
        Log out
      </router-link>
    </top-menu>

    <sidebar>
      <menu>
        <router-link to="/admin" v-if="authenticated">
          Admin
        </router-link>
      </menu>
    </sidebar>

    <posts>
      <post>
        <delete-button v-if="authenticated" />
      <post>
    </posts>
  </layout>
</app>
```

Problem: same reactive state required in many places.

Solution: Vuex - "Flux Architecture"

- Similar to the Posts store from Project #3.
