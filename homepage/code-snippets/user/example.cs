User user = new User();
user.Email = "you@email.com";
user.Id = "username";

OnCompletedHandler<User> handler = new OnCompletedHandler<User>(
  (User result, Exception e) =>
  {
    done = true; });
UserService.Add(user)
.SetCompletion(handler)
.Execute(client);
