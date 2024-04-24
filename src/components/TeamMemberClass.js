import React from "react";
import { MEMBER_API_URL } from "../utils/constants";

class TeamMemberClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        avatar_url: "",
        login: "",
        id: "",
      },
    };
  }

  async componentDidMount() {
    const membData = await fetch(MEMBER_API_URL);
    const jsonMember = await membData.json();

    this.setState({ userInfo: jsonMember });
  }

  render() {
    const { avatar_url, id, login } = this.state.userInfo;
    return (
      <div className="member-card">
        <img src={avatar_url}></img>
        <h4>ID: {id}</h4>
        <h4>Name: {login}</h4>
      </div>
    );
  }
}

export default TeamMemberClass;
