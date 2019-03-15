
export default class RequestLeave extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.onPost();
  }


  onPost = () =>{
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "uid": this.state.issuer,
        "unAuthNotes":true,
        "authedNotes":true,
        "offset":0,
        "limit":5
      })
    }).then((response) => {
      return response.json()
    }).then((data) => {
      if (data.excutionResult == "success") {
        console.warn(data.leaveNote)
        this.setState({
          isLoading: false,
          leaveNote: data.leaveNote,
        });
      }
    }).catch((err) => {
      console.warn('錯誤:', err);
    });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View></View>
      )
    }
    else{
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.Scrollcontainer}>
  
          {this.state.leaveNote.map((note) => {
           return (
            <CardLeave
            profile_icon={items_Text[0].children[0].profile_icon}
            profile_name={note.issuerName.toString}
            leave_type={note.type}
            leave_start_date={items_Text[0].children[0].leave_start_date}
            leave_end_date={items_Text[0].children[0].leave_end_date}
            leave_start_time={items_Text[0].children[0].leave_start_time}
            leave_end_time={items_Text[0].children[0].leave_end_time}
            leave_desc={note.desc}
            leave_apply_date={items_Text[0].children[0].leave_apply_date} />
           );
        })}
          </ScrollView>
        </SafeAreaView>
      );
    }

  }
}