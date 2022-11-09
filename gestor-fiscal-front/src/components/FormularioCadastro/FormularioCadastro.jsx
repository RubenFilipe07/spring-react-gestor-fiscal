import React from "react";
import { Form, Input, Button } from "antd";
import { SaveFilled } from "@ant-design/icons";
import './FormularioCadastro.css'

  
const formulario = (props) => (
     <Form className="form-cadastrar-item">
              <Form.Item name="nome-item" onChange={props.handleChangeName} label={props.campoNomeFormulario}>
                <Input />
              </Form.Item>
              {props.campoNomeFormulario === "Nome do Estado:" ? (
                <Form.Item name="sigla-estado" onChange={props.handleChangeSigla} label="Sigla">
                  <Input />
                </Form.Item>
              ) : null}
              <Form.Item name="valor-item" onChange={props.handleChangeValue} label="Valor">
                <Input type={"number"} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" onClick={props.cadastraItem}>
                  <SaveFilled />Salvar
                </Button>
              </Form.Item>
            </Form> 

);

export default formulario;