# <%- name %>

<style>
th, td {
  font-size: 16px;
  padding: 4px;
  text-align: left;
  min-width: 100px;
}
</style>

<table>
  <tr>
    <th>Name</th>
    <th>Value</th>
  </tr>
<% schema.oneOf.forEach(function(val) { -%>
  <tr>
    <td>`<%- val.title %>`</td>
    <td><%- JSON.stringify(val.enum[0]) %></td>
  </tr>
<% }) -%>
