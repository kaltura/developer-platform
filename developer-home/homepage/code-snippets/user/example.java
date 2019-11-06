User user = new User();
user.setEmail("you@email.com");
user.setId("username");

AddUserBuilder requestBuilder = UserService.add(user); 
