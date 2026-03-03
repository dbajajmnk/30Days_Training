def main():
    # from Features.Forgot.index import packageInfoForgot
    # from Features.Login.index import packageInfoLogin
    # from Features.Profile.index import packageInfoProfile
    # from Features.Signup.index import packageInfoSignup

    from Features.Forgot.index import packageInfoForgot
    from Features.Login.index import packageInfoLogin
    from Features.Profile.index import packageInfoProfile
    from Features.Signup.index import packageInfoSignup

    result = packageInfoForgot()
    print(f"Result {result}")
    result = packageInfoLogin()
    print(f"Result {result}")
    result = packageInfoProfile()
    print(f"Result {result}")
    result = packageInfoSignup()
    print(f"Result {result}")

print(__name__)
if __name__=="__main__":
    main()