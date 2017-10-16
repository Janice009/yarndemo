/**
 * Created by janice on 2017/10/16.
 */
//基础配置
import React from 'react';
import { Table, Input, Popconfirm } from 'antd';

class EditableCell extends React.Component {
    state = {
        value: this.props.value,
        editable: this.props.editable || false,
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.editable !== this.state.editable) {
            this.setState({ editable: nextProps.editable });
            if (nextProps.editable) {
                this.cacheValue = this.state.value;
            }
        }
        if (nextProps.status && nextProps.status !== this.props.status) {
            if (nextProps.status === 'save') {
                this.props.onChange(this.state.value);
            } else if (nextProps.status === 'cancel') {
                this.setState({ value: this.cacheValue });
                this.props.onChange(this.cacheValue);
            }
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.editable !== this.state.editable ||
            nextState.value !== this.state.value;
    }
    handleChange(e) {
        const value = e.target.value;
        this.setState({ value });
    }
    render() {
        const { value, editable } = this.state;
        return (
            <div>
                {
                    editable ?
                        <div>
                            <Input
                                value={value}
                                onChange={e => this.handleChange(e)}
                                />
                        </div>
                        :
                        <div className="editable-row-text">
                            {value.toString() || ' '}
                        </div>
                }
            </div>
        );
    }
}

class DepartManage extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: '组织名称',
            dataIndex: 'name',
            width: '10%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text),
        }, {
            title: '部门名称',
            dataIndex: 'age',
            width: '10%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'age', text),
        }, {
            title: '部门类型',
            dataIndex: 'departtype',
            width: '10%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'address', text),
        },{
            title: '父级部门',
            dataIndex: 'parent',
            width: '10%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'address', text),
        },{
            title: '是否有效',
            dataIndex: 'available',
            width: '10%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'address', text),
        },{
            title: '管理员',
            dataIndex: 'charge',
            width: '10%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'address', text),
        }, {
            title: '服务区域',
            dataIndex: 'area',
            width: '15%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'address', text),
        }, {
            title: '服务行业',
            dataIndex: 'service',
            width: '15%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'address', text),
        }, {
            title: '操作',
            dataIndex: 'operation',
            render: (text, record, index) => {
                const { editable } = this.state.data[index].name;
                return (
                    <div className="editable-row-operations">
                        {
                            editable ?
                                <span>
                  <a onClick={() => this.editDone(index, 'save')}>保存</a>
                  <Popconfirm title="Sure to cancel?" onConfirm={() => this.editDone(index, 'cancel')}>
                      <a>Cancel</a>
                  </Popconfirm>
                </span>
                                :
                                <span>
                  <a onClick={() => this.edit(index)}>编辑</a>
                </span>
                        }
                    </div>
                );
            },
        }];
        this.state = {
            data: [{
                key: '0',
                name: {
                    editable: false,
                    value: 'Edward King 0',
                },
                age: {
                    editable: false,
                    value: '32',
                },
                address: {
                    value: 'London, Park Lane no. 0',
                },
            }],
        };
    }
    renderColumns(data, index, key, text) {
        const { editable, status } = data[index][key];
        if (typeof editable === 'undefined') {
            return text;
        }
        return (<EditableCell
            editable={editable}
            value={text}
            onChange={value => this.handleChange(key, index, value)}
            status={status}
            />);
    }
    handleChange(key, index, value) {
        const { data } = this.state;
        data[index][key].value = value;
        this.setState({ data });
    }
    edit(index) {
        const { data } = this.state;
        Object.keys(data[index]).forEach((item) => {
            if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                data[index][item].editable = true;
            }
        });
        this.setState({ data });
    }
    editDone(index, type) {
        const { data } = this.state;
        Object.keys(data[index]).forEach((item) => {
            if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                data[index][item].editable = false;
                data[index][item].status = type;
            }
        });
        this.setState({ data }, () => {
            Object.keys(data[index]).forEach((item) => {
                if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                    delete data[index][item].status;
                }
            });
        });
    }
    render() {
        const { data } = this.state;
        const dataSource = data.map((item) => {
            const obj = {};
            Object.keys(item).forEach((key) => {
                obj[key] = key === 'key' ? item[key] : item[key].value;
            });
            return obj;
        });
        const columns = this.columns;
        return <Table bordered dataSource={dataSource} columns={columns} />;
    }
}

export default DepartManage