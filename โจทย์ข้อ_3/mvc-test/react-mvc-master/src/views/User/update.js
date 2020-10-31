import React, { Component } from 'react';
import GOBALS from '../../GOBALS';

import {
  Form, FormGroup, Button,
  Card, CardHeader, Col,
  Row, CardBody, Label,
  Input, CardFooter,
  CustomInput
} from 'reactstrap';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import UserModel from '../../models/UserModel';
import UploadModel from '../../models/UploadModel';


var user_model = new UserModel;
var upload_model = new UploadModel;

class UserUpdate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      file: null,
      imagePreviewUrl: '',
      upload_url: 'user',
      user_image: '',
      res: ''
    };
    this.uploadImage = this.uploadImage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    const user_code = this.props.match.params.user_code;
    const user_bycode = await user_model.getUserByUserCode(user_code);
    document.getElementById("user_code").value = user_bycode.user_code
    document.getElementById("user_name").value = user_bycode.user_name;
    document.getElementById("user_lastname").value = user_bycode.user_lastname;
    document.getElementById("user_email").value = user_bycode.user_email;
    document.getElementById("user_tel").value = user_bycode.user_tel;
    document.getElementById("user_username").value = user_bycode.user_username;
    document.getElementById("user_password").value = user_bycode.user_password;
    document.getElementById("user_address").value = user_bycode.user_address;
    document.getElementById("user_image").value = user_bycode.user_image;
    var user_image = 'no-image.jpg'
    if (user_bycode.user_image != '') {
      user_image = user_bycode.user_image
    }
    this.setState({
      user_image: user_image
    })
  }

  async uploadImage(file, upload_url) {
    const formData = new FormData();
    var res = file.name.split(".");
    formData.append('file_type', '.' + res[res.length - 1]);
    formData.append('upload_url', upload_url);
    formData.append('files', file);
    var res_upload = await upload_model.uploadFile(formData);
    return res_upload;
  }

  
  async deleteImage(url) {
    var res_delete = await upload_model.fileDelete(url);
  }


  async handleSubmit(event) {
    event.preventDefault();
    var arr = {};
    var user_code = document.getElementById("user_code").value;
    var user_name = document.getElementById("user_name").value;
    var user_lastname = document.getElementById("user_lastname").value;
    var user_email = document.getElementById("user_email").value;
    var user_tel = document.getElementById("user_tel").value;
    var user_username = document.getElementById("user_username").value;
    var user_password = document.getElementById("user_password").value;
    var user_address = document.getElementById("user_address").value;
    if (user_name == '') {
      swal({
        title: "Warning!",
        text: "Please Enter Your Name ",
        icon: "warning",
        button: "Close",
      });

    } else if (user_lastname == '') {
      swal({
        title: "Warning!",
        text: "Please Enter Your Lastname ",
        icon: "warning",
        button: "Close",
      });
    } else if (user_email == '') {
      swal({
        title: "Warning!",
        text: "Please Enter Your email ",
        icon: "warning",
        button: "Close",
      });
    } else if (user_password == '') {
      swal({
        title: "Warning!",
        text: "Please Enter Your Password ",
        icon: "warning",
        button: "Close",
      });
    } else {
      var user_image = document.getElementById("user_image").value;
      if (this.state.file != null) {
        var image_name = await this.uploadImage(this.state.file, this.state.upload_url);
        if (image_name.upload_result) {
          await this.deleteImage(user_image);
          user_image = image_name.comment_photo_url

        }
      }
      arr['user_code'] = user_code;
      arr['user_name'] = user_name;
      arr['user_lastname'] = user_lastname;
      arr['user_email'] = user_email;
      arr['user_tel'] = user_tel;
      arr['user_username'] = user_username;
      arr['user_password'] = user_password;
      arr['user_address'] = user_address;
      arr['user_image'] = user_image;
      const user = await user_model.updateUserByUserCode(arr);
      if (user.query_result == true) {
        swal("Save success!", {
          icon: "success",
        });
        this.props.history.push('/user');
      } else {
        window.confirm("เพิ่มข้อมูลไม่สำเร็จ")
      }
    }
  }

  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    if (file != undefined) {
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result,
        });
      }
      reader.readAsDataURL(file)
    }
  }

  render() {
    const { imagePreviewUrl } = this.state
    return (
      <div class="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <Form onSubmit={this.handleSubmit} id="myForm">
                <CardHeader>
                  แก้ไขผู้ใช้งาน / Edit User
                </CardHeader>
                <CardBody>
                  <FormGroup row>
                    <Col lg="3">
                      <FormGroup>
                        <Label>ชื่อ / Name <font color="#F00"><b>*</b></font></Label>
                        <Input type="hidden" id="user_code" name="user_code" class="form-control" />
                        <Input type="text" id="user_name" name="user_name" class="form-control" />
                        <p class="help-block">Example : วินัย.</p>
                      </FormGroup>
                    </Col>
                    <Col lg="3">
                      <FormGroup>
                        <Label>นามสกุล / Lastname <font color="#F00"><b>*</b></font></Label>
                        <Input type="text" id="user_lastname" name="user_lastname" class="form-control" />
                        <p class="help-block">Example : ชาญชัย.</p>
                      </FormGroup>
                    </Col>
                    <Col lg="3">
                      <FormGroup>
                        <Label> อีเมล์ / Email </Label>
                        <Input type="text" id="user_email" name="user_email" type="email" class="form-control" />
                        <p class="help-block">Example : admin@revelsoft.co.th.</p>
                      </FormGroup>
                    </Col>
                    <Col lg="3">
                      <FormGroup>
                        <Label>โทรศัพท์ / Mobile </Label>
                        <Input type="text" id="user_tel" name="user_tel" type="text" class="form-control" />
                        <p class="help-block">Example : 0610243003.</p>
                      </FormGroup>
                    </Col>
                    <Col lg="3">
                      <FormGroup>
                        <Label>ยูสเซอร์ / Username <font color="#F00"><b>*</b></font></Label>
                        <Input type="text" id="user_username" name="user_username" class="form-control" />
                        <p id="alert_user_username" class="help-block">Example : thana.</p>
                      </FormGroup>
                    </Col>
                    <Col lg="3">
                      <FormGroup>
                        <Label>รหัสผ่าน / Password <font color="#F00"><b>*</b></font></Label>
                        <Input type="text" id="user_password" name="user_password" type="password" class="form-control" />
                        <p id="alert_user_password" class="help-block">Example : thanaadmin.</p>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col lg="12">
                      <FormGroup>
                        <Label>ที่อยู่ / Address <font color="#F00"><b>*</b></font> </Label>
                        <Input type="textarea" id="user_address" name="user_address" class="form-control" />
                        <p class="help-block">Example : 271/55.</p>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row style={{ justifyContent: 'center' }}>
                    <Col lg="6" >
                      <FormGroup>
                        <Label>อัพโหลดภาพ</Label>
                        {imagePreviewUrl != '' ?
                          <img className="imgesupload" src={imagePreviewUrl} />
                          :
                          <img className="imgesupload" src={GOBALS.URL_IMG + this.state.user_image} />}
                        <CustomInput key="key" type="file" id="exampleCustomFileBrowser"
                          accept="image/x-png,image/gif,image/jpeg" name="customFile"
                          onChange={(e) => this._handleImageChange(e)} />
                        <Input type="hidden" id="user_image" name="user_image" class="form-control" />
                      </FormGroup>
                    </Col>
                  </FormGroup>


                </CardBody>
                <CardFooter>
                  <Link to="/user"><Button type="buttom" size="sm" > Back </Button></Link>
                  <Button type="button" onClick={this.uploadImage} size="sm" color="danger"> Reset</Button>
                  <Button type="submit" size="sm" color="primary">Save</Button>
                </CardFooter>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}


export default UserUpdate;

