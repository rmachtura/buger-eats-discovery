const { faker } = require('@faker-js/faker')
var cpf = require('gerador-validador-cpf')

export default{

    deliver: function(){
        
        const fullName = faker.name.findName()

        var data = {
            nome: fullName,
            cpf: cpf.generate(),
            email: faker.internet.email(fullName.split(' ')[0]),
            whatsapp: faker.phone.phoneNumber(),
            endereco: {
                cep: '15010040',
                numero: '2228',
                complemento: 'Sl 4'
            },
            entrega: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }    
}