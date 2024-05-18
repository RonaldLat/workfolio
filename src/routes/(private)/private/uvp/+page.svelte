<script>
  
</script>

<form method="POST" action="api/upv">
  <input type="text" name="businessName" class="dark:bg-gray-200">
  <input type="file" name="logo" class="dark:bg-gray-200" >
  <input type="text" name="phoneNumber"  class="dark:bg-gray-200">
  <input type="text" name="slogan"  class="dark:bg-gray-200">
  <button type="submit">Save</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
