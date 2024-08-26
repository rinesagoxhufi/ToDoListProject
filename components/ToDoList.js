import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../Files/actions";
import { FlatList, StyleSheet, TextInput, Button, Text, TouchableOpacity, View } from "react-native";

const ToDoList = () => {
    const [task, setTask] = useState(''); //menaxhon futjen e tekstit per te shtuar nje detyre te re 
    const [editId, setEditId] = useState(null); // mban identifikinin e id te artikullit qe po modifikohet incializohet me null  do te thote qe asnje detyre nuk po modifikohet
    const [updatedTask, setUpdatedTask] = useState(''); //menaxhon futjen e tekstit per perditesimin e nje detyre ekzistuese 

    const todos = useSelector((state) => state.todos);  // e merr listen e detyrave nga store
    const dispatch = useDispatch();  //dergon veprime ne store 

    const addTodoHandler = () => {
        if (task.trim()) {  //kontrollon nese hyrja eshte bosh
            dispatch(addTodo(task)); //dergon addTodo veprimin ne store
            setTask(''); //pastron fushen e hyrjes pas shtimit te detyres
        }
    };

    const editTodoHandler = () => {
        if (updatedTask.trim()) {
            dispatch(editTodo(editId, updatedTask));  // dergon editTodo veprimin ne store  me ane te id dhe permabjtjen e perditesuar te detyres 
            setEditId(null);
            setUpdatedTask(''); ///pasttron fushen pas editimit te detyres
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Sheno nje detyre te re"
                value={task}
                onChangeText={setTask}
                style={styles.input}
            />
            <Button title="Shto nje detyre" onPress={addTodoHandler}  />

            <FlatList 
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <Text>{item.task}</Text>
                        <View style={styles.actions}>
                            <TouchableOpacity onPress={() => { setEditId(item.id); setUpdatedTask(item.task); }}>
                                <Text style={styles.editText}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => dispatch(deleteTodo(item.id))}>
                                <Text style={styles.deleteText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

           {editId && (
            <View style={styles.editContainer}> 
             <TextInput
               placeholder="Rikrijo detyren"
              value={updatedTask}
               onChangeText={setUpdatedTask}
               style={styles.input}
          />
          <Button title="Rikrijo Detyren" onPress={editTodoHandler} />
        </View>
            )}
        </View>
    );
};

export default ToDoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    input: {
        marginTop: 60,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 5,
        
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    taskText: {
        flex: 1,
    },
    editText: {
        color: 'blue',
        marginRight: 10,
    },
    deleteText: {
        color: 'red',
    },
    editContainer: {
        marginBottom: 400,
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3, 
        backgroundColor: '#ced8de'
    },
    listContainer: {
        flexGrow: 1,
    }
});