function Hello(){

    let number = 786;
    let Name = 'krushna';
    let fullName = ()=> {
        return 'krushna Gate';
    }
    return <p>
       MessageNo: {number} .I am your master {fullName}
    </p>
}
export default Hello;