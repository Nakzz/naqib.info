import React, { Component } from "react";
import axios from "axios";

interface IState {
  github: number;
}

interface IProps {}

const fetchGithubData = async (username: string, apiToken: string) => {
  const { data } = await axios.get("https://api.github.com/user", {
    auth: {
      username,
      password: apiToken,
    },
  });
  return data.public_repos;
};

export class Funfacts extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      github: 0,
    };
  }

  async componentDidMount() {
    const apiToken =
      "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"; //FIXME: process.env.REACT_APP_GITHUB_API_TOKEN ||
    const username = "nakzz";

    const publicRepos = await fetchGithubData(username, apiToken);
    this.setState({ github: publicRepos });
  }

  render() {
    const { github } = this.state;

    return (
      <section className="funfacts-area ptb-120 bg-38d16a">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="funfact">
                <a href="https://github.com/Nakzz/">
                  <h3>
                    <span className="odometer" data-count={github}>
                      {github}
                    </span>
                  </h3>
                  <p>Public Github Projects</p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="3325">
                    3325
                  </span>
                </h3>
                <p>Creative Projects</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="funfact">
                <h3>
                  <span className="odometer" data-count="54380">
                    6438
                  </span>
                </h3>
                <p>Lines of Code of this application</p>
              </div>
            </div>

            <div className=" container">
              <div className="col-lg-12 col-md-12 col-sm-12 row justify-content-md-center m-t-40">
                <img src="https://github-readme-stats.vercel.app/api?username=nakzz&count_private=true&show_icons=true&hide_title=true&theme=vue" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Funfacts;
