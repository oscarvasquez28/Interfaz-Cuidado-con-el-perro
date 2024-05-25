import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';

import PostCheckOut from '../Components/PostCheckOut';
import PlayeraGris from '../Images/Ropa/Hombre/vegeta.jpg';
import PlayeraGris2 from '../Images/Ropa/Hombre/playera-gris-2.jpg'
import Header from '../Components/Header'


import '../Pages/CheckOut.css'; 



function CheckOut() {

  const location = useLocation();
  const { totalparcial, totalfinal, CostoEnvio, cantidadProductos } = location.state || {};

  const { id } = useParams();
  const [carritos, setCarritos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8081/LeerCheckOut/${id}`)
        .then(res => {
            console.log(res);
            setCarritos(res.data); // Se asigna la lista completa de carritos
        })
        .catch(err => console.log(err));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8081/deleteCarrito`)
      .then(response => {
        // alert('La tabla de carrito fue borrada');
      })
      .catch(error => console.error(error));
  };

  //para obtener los valores de los inputs
  const [Nombre, setNombre] = useState('');
  const handleNombre = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setNombre(event.target.value);
  };

  const [Apellido, setApellido] = useState('');
  const handleApellido = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setApellido(event.target.value);
  };

  const [Calle, setCalle] = useState('');
  const handleCalle = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setCalle(event.target.value);
  };

  const [Num, setNum] = useState('');
  const handleNum = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setNum(event.target.value);
  };

  const [CP, setCP] = useState('');
  const handleCP = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setCP(event.target.value);
  };

  const [Colonia, setColonia] = useState('');
  const handleColonia = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setColonia(event.target.value);
  };

  const [Ciudad, setCiudad] = useState('');
  const handleCiudadad = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setCiudad(event.target.value);
  };

  const [Region, setRegion] = useState('');
  const handleRegion = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setRegion(event.target.value);
  };

  
  const [Pais, setPais] = useState('');
  const handlePais = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setPais(event.target.value);
  };

  const [email, setemail] = useState('');
  const handleemail = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setemail(event.target.value);
  };

  const [Prefijo, setPrefijo] = useState('');
  const handlePrefijo = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setPrefijo(event.target.value);
  };

  const [Tel, setTel] = useState('');
  const handleTel = (event) => {
    // Actualizar el estado con el nuevo valor del input
    setTel(event.target.value);
  };

  function handleClick() {
    if (document.querySelector('.btn-Continuar-si')) {
      // alert('¡Se guardó y continuó!');
    } else if (document.querySelector('.btn-Continuar')) {
      alert('¡Por favor complete todos los campos antes de continuar!');
    }
  }

  const [activeButton, setActiveButton] = useState(null);

  const handleClick2 = (button) => {
    setActiveButton(button);
  };

  const handleUpdate = () => {
    axios.post('http://localhost:8081/UpdateCheckOut', { id: id })
        .then(response => {
            console.log(response);
            alert("Los artículos fueron comprados");
            // alert(id);
            // Realiza alguna acción adicional si es necesario
        })
        .catch(error => {
            console.error(error);
            alert("Hubo un error al intentar comprar los artículos");
        });
  };

  const HandleUpdateAndDelete = () => {
    handleUpdate();
    handleDelete();
  };


  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Verificar si todos los campos están completos
    if (cardNumber && cardHolder && expirationDate && cvv) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [cardNumber, cardHolder, expirationDate, cvv]);

  const handleCardNumberChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, ''); // Remover caracteres que no sean dígitos
    if (inputValue.length <= 16) {
      setCardNumber(inputValue);
    }
  };

  const handleCardHolderChange = (e) => {
    setCardHolder(e.target.value.replace(/[^a-zA-Z\sÑñ]/g, ''));
  };

  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remover caracteres que no sean dígitos
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  const handlePayClick = () => {
    if (!isFormValid) {
      alert('Por favor complete todos los campos.');
    } else {
      // Aquí puedes manejar la lógica de pago y la navegación a la página de agradecimiento
      console.log('Todos los campos están llenos, procesando pago...');
    }
  };

  
  return (
    <div className='all-container'>
      <Header/>
      
      <div className='co-down'>
        <div className='co-Left'>

          <div>
          <h3> <b>DATOS</b>  &#10097;   PAGO  </h3>
          </div>
          <br /> <br />

          <div>
          <h2>1. ¿PARA QUIÉN ES EL PEDIDO?</h2>
          </div>
          <br />

          <div className='grid'>
            <input className='inpuut elem-1' type="text" name="" id="" placeholder='Nombre' onChange={handleNombre}/>
            <input className='inpuut elem-2' type="text" name="" id="" placeholder='Apellido' onChange={handleApellido}/>
            <input className='inpuut elem-3' type="text" name="" id="" placeholder='Calle' onChange={handleCalle}/>
            <input className='inpuut elem-4' type="text" name="" id="" placeholder='Número' onChange={handleNum}/>
            <input className='inpuut elem-1' type="text" name="" id="" placeholder='Código Postal' onChange={handleCP}/>
            <input className='inpuut elem-2' type="text" name="" id="" placeholder='Colonia' onChange={handleColonia}/>
            <input className='inpuut elem-1' type="text" name="" id="" placeholder='Ciudad' onChange={handleCiudadad}/>
            <input className='inpuut elem-2' type="text" name="" id="" placeholder='Region' onChange={handleRegion}/>
            <input className='inpuut elem-1' type="text" name="" id="" placeholder='Pais' onChange={handlePais}/>
            <input className='inpuut elem-1' type="text" name="" id="" placeholder='Email' onChange={handleemail}/>
            <input className='inpuut elem-5' type="text" name="" id="" placeholder='Prefijo' onChange={handlePrefijo}/>
            <input className='inpuut elem-6' type="text" name="" id="" placeholder='Número de teléfono' onChange={handleTel}/>
          </div>

          <div>
            <div className='suscribir'>
              <input type="checkbox" />
              <p> Quiero suscribirme al Newsletter</p>
            </div>
            {/* <button className={ (Nombre !== '' && Apellido !== '' && Calle !== '' && Num !== '' && CP !== '' && Region !== '' && Pais !== '' && email !== '' && Prefijo !== '' && Tel !== '') ? "btn-Continuar-si" : " btn-Continuar"}>
              GUARDAR Y CONTINUAR
            </button> */}
            {/*ventana modal*/}
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Método de Pago</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setActiveButton(null)}> 
                    </button>
                  </div>
                  <div class="modal-body">
                    <div className="modal-body-container">
                        <div className="modal-body-container-row">
                          <button className={`modal-metodo-pago-button-1 ${activeButton === 1 ? 'active' : ''}`} onClick={() => handleClick2(1)}>
                          <div className="modal-body-first-column">
                            <p>Tarjeta de crédito</p>
                          </div>
                          <div className="modal-body-second-column">
                            <img src="data:image/png;base64,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"
                            className='modal-body-image'/>
                            <img src="https://i.pinimg.com/736x/56/fd/48/56fd486a48ff235156b8773c238f8da9.jpg" 
                            className='modal-body-image' />
                          </div>
                          </button>
                        </div>
                        <div className="modal-body-container-row">
                        <button className={`modal-metodo-pago-button-2 ${activeButton === 2 ? 'active' : ''}`} onClick={() => handleClick2(2)}>
                          <div className="modal-body-first-column">
                            <p>Tarjeta de débito</p>
                          </div>
                          <div className="modal-body-second-column">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABJlBMVEX///8BJpkSGmIAIIMAIYgIHHQBIosAJ5wBI5EQGWQOGWgOGmsAIo0IHHIAKJoAJJQCH4AEHnoHH3kAAFcAAGjFxdEAAFvMzdvLzuQAAFUAAIb3+PsAAHIAAJAABZbDxt4AAH4AAGXDxdYAAIoAAHUWHGAmOZoAAFDr7PMAFoAAD24AEpUAFnAAFX0AG4sADIN1fLBmbqlXYKDk5e62t8aNj6iSl73X2OEAF5EEDF0AE5idn7RqbJCQlsR9g7J4gLhJVqa2udNJVJoZLo0AAEowPo4nOJKJiqRZX5MlKWZARHdtcZwZKH4zN200PH6nqsZkZowiKXCMkbU1RqOprtFeY5Wfpc1DSYJkb7M7R5R8fqA7PnMpNoJVYa5OUH1CUahtd7eFjMKRiXwkAAAP1UlEQVR4nO2db3vSyBrGo7S0VGrpEqEl0IaCllJICrQFrEWxR63rKtrVql317Pn+X+IkgSTz555JSPY613kx9wv1spMh82Pmycz9zKSapqSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkRKhVnt5envT6jnonl7fT8uB/+OHGo3gatuJXecBefOCpHJRoHUBFtNvYv3lpOrJt2/Lk/KNSqZhXvfMDY4kmt3b2geLUcPqv3bmKlEpFVoePz2LyuijVCem+6mdBiTP3f6us9ANJpcPzVw4ma8VTNuv9sdC65TB7PZFdHcq43GrUeO3V9mNc/Gb3/uO57kcoVzo8i67P0afOA0Kbvurhd3fdXl1d3f5trm1fVeGXa5xfmfZKZsUXDSubd+QC60U3eFo7vof08PgyRstO794e7hbvx4DlqPR7jBrLpQcIVvtdWERfBbAKfwgqHJw0HVKOZLA8YJXXEfd23oCoHFhrL2I0TXPD1pv3h8VxDFj3S7+iq3vXhrDqw7D1EFb3Hayu1WseZeaKgpW3J/Jbmza2RLDu1eLB8oCdPnPi0v3I7lW8iKyJ7lg+rM6HsMgphNWcoeomAaoYsBpT+a01toSwHu4t91gt3xWj+9dh1FPjog5h6adhkRsIqzrkKyuv2JlMfFgVeYN7Iwmsp3LQQI8+HpZy8oEY1bU+PUCwVnWiyIcOhMXXddNcySwFS3pnA6djiWGN/rMsLKerXrzflXWvcUSMH5YgLP2GKON1LBZW4QNXV9/MZJaBZfWlt/Z8JIO19ufysNz2PjsU48odyi9mwrsPq07M0YYQVpcLzq/szHKw7HPZnbkRSwLr4RIRnlLr465oMOaKILQQd8R2rDms9jVRZlZFsKpszPhxlFkSVmVHdmu3x3JYe9KGyVQWhfpc6VR2HRveF7D0MlHmXRvCYoLzd45VNCzpwye/JYd1/DkpLM14i2nlSm9kl73tIFgdar75RwfCois6MQvLwrKuZHe2U4uANfo7ISrNHVBwJObGsnkpF97nsHRyCmXMQxYDq0sH52mzsDSs0YmsPT9HEbDWniSHpZ0WIazcruSaOwhrtU6WKUNYVSo4G4hVFKyKbBy1vPAug/Wwtox1wertBoYlmfmVNhCs+h1Z5qIKYVGmwfVREliyCH05ioS1J30+ROiiBGEVHwmvOK1jWBTeL20Ii/R/htWCDJbnZLmeVp6CZcoaM49YUlhPb1PAau1CWCWxUfNhjGC1v1KFFh2LjVlkkX5XCOvINM1XvcnkcnLSf1UxK6ZDbBHfX0jaMo0Ba/QtBSztLQjxudz4o6j8sLSBYOnUZKOlI1jdL0SRgROxMCzL/D4ju6lRnp2sVCqWNyWVOVJ/WtGw1kYJOXl6A8ZhzulaovJ3dQSr06YKHUBYVfJ5eSOAlTX7KF62Zn2XV0Vi/Q0X4V0Oay++dc7rEXgeOrB2RXU6HQvA0ulhe4NhkbNWdxCimYMpNAaM6feKKWnq36NYsOJYy8JbOISwRBH+FMOq00/krx0Iiyg0bGJYZlmTaNCTNCToWFJYT+NYy0L9xU8e3GEocGn+GiNYbcYAra8CWIUfRImZCWGZ0ByMpfmyMDpm/Uz8CY7O+KDl9qxnsLAb3gGsOj37GeoIFmU5vDuCsOzk7VjfigVrbS/5R7jLaQRr4zEs7IZ3HlbnB11qBmE1yWj0I4NgHUmGWYT2G+scrCyElSpjywctB1YOW8ulBwhWnTEp7toIFmU5VAsIlhWRjJDohcXBGl3+HAFYS1vLpH5x1oMLC1paXngHsJhiPzoQFlHCaEJYRy+TNmLQWOdg1QaXxzys4wTWcih+xZMTRXgvvHOw6GWhQ6K+CWBRc/wWhpWRTQ2kmox4WFltH8Aa/TvhR3gackHLg3XHlxzMOxYLq8S0sKwjWFXSoR8IYCXuWk7HYmEdX2qtGg8rXYTXOHvZhbXxni/4po5gda6ZYhcYFmk5iGBlTKlfJdQUwKo53+FoDcBKbC27+sgGLRcWsrQWHYuBVWd3a3xpQ1hk/xMNQ4dWogfia4uD5Q23byMe1tPk1rIGglYOR/hTCGtzky2nr0JYVBn8NHS0Yl8t/82X3Y7FwPLs9ttjHtbo+dL1E+KClgeLT1r8PkawdPZJ0NI3ASzKchDNs1xYK3lz6QlEb8TD8jzRnT0eViprWdOKOQSLTVoMihsIVp2dkB1AWMwuhwmewc/9LHvJVY/hdSwa1ty4MhoAVroI/2wMYHFpaT+807DYZaFrOSBYVXqFPBUspOdOada8WsYcOD/mYS02rj1ZA7DSWMtOMAKwuAjvRywaVp2LMF87EBbdAY2qDJaL65XUf6BkbQFY8x89H/GwUlnL2mAXwSrSi6hTCKvD715w4jsPi9vFNl9JC2G5hunLmJF+fz4KKVh+FP/8lIeVJnnoaJwDsJgI/2uMYLHLQncX2yaAxe1iG1QjYGWzltmLNaF/YfGwaouhNqzxsNYeJqO00N0YwaLcz1YQ3mlYXF1TCKvKhezeURQst3dJt4HMNais87Du+T9FsPbSJA/ZXOscFp2WPqsjWDqfBbprQ1jckDKamei8Yd7MR25Qnox4WOFW2xcjACtVhGcSYrlF1yKLhBGLhMUuCzXXcoCw+A89iJWRzkdO6f2ORcKqBfGWMB4CWLF2LYtFJ8QWsIoEiUcQVucLV5NR3wSwwC42dytprIy0bUufi58bPCxi09p+jYeVzlpmEmJ+zyKSFkR4J2DV+WYMdQSLshwC9eLtosmbsmf9E4uHRewsagFYa8eJQbmiE2I+rHAh09rNIVif+JpmGBbe8PXFjAMrm62Ih+JOMAoJWA0igofGQwgrVfKQSYgtYI3DpMVZCcGqg1XJuzaEJTC+J81YsLKm0Of6NuJhUcMsNB4IWGmSh5r2foOHtZELflzagLBARZ1VAAvF97lm9F5l4S4aW0DLCDtWCKtG2uyh8UAMw3QRnkqILWDldv3e/KiUA7DawExt1TcBrDbrD4YaFuw4sEQjcbEsZGCRJXZqPKzRi6Sc5jiKAFbRj9+/xghWCYytAx3BqsrmlpNmNwasfAU6EeEgDGHRyxkDwEppPFAJsRwT4Z3wDmB1voJqzqoQlnRmWf7DjAErb4LvZtrI87Bq9JwzMB5IWOmOe5IJsQDWYpxdlBAszk52dd2GsCLWF7dNOxqW9Z2/8IUFYDG7igLjgYC1/LkUSqS37MPykxbjDQSrjaqprwJY279Ffbpx4p91EsMC+40GlTwPiz1zEhgPBKx0yUNtuMvDWpy0cMM7D6uONgcO9E0AS3Bwjr6yP8clgWW9Yi86GQFYDWYZOqjxsBKeSwl0CGCVvM/9OEawSmhonUJYvOWAVP5ursg34HK7byvrPKx73E55BCtlhCeCVgjLnXgbuzkAi7eTXd3VIay4Lt6VKYXFnsv87IxCDtYxtzbyjQcKVqrkIRm0QlhvtEV452CV4Kd96CBYOioKNTNtCaz1PF36ygKwGtxSxjceSFjpkodk0ApgeUmL3AaABexkV4uORcMSlIUyTsysEFa+QoHYqeR5WBa/lcE3HkhYKa1lIosfwHKTFuViDsDi7WRXQx3B6oKZvljlI0sMi3oefrMArAbfZVoAVsrkIZHFD2EVB4vwzsGCVcwgLO7gXIRemiJYNhmPWl7H4mC1DFaaBWCls5aJhBgB63QR3hlYdXxsbG45cLCWnS73bBEscgF8OUKwthoN7gUY4GmY0lomEmIhrNLFIrwzsICd7OpBB8Ja+lZeHmFY1Jkwex3C2orYU+pH+FTJQyIhFsIaf/xrA8ASuAiGH98pWG20hpTLMKNhOcvCNLDSnUshsvg5gpbPioJVx7vkD3QES4eWslwTGw9DAtZ3KxWstbWElBYKEmI5JALWZg5XcAZhyS0HrP1KVMwaVvLpYKWzlsOEWBSsuuBEwXUb9qwEd1U2o56GJ6O0sNJZy9rjXDxYcFnoKOhYNKwEd7KPYVWCSYjhd6zEsFJay9pdMRYsdneyr0EdwWrzucVoCWJWuJL+bKaFlTJ5GHjLEbDwsjC0HGhYrOUQZwUrehqGr1bJWmlhrT1NDsq7x8M4sMaiqcANhsUkYr90oyf0fQu/bCzwSsvBKEwOK6W1rL3PxYAlfEPG1w6CpTMBrltods/lMf+kIrBogrxH30oPK6W17GfxpbAEy0IttBwoWOwhqFZ1e7tQrfbFd2q8rESZf62wYyWHldJa9oOWFBa0k10NdQSrzRh2B00H1vZ2t1m9nqFxYJybItchfFvIpf0PwEp3LiUIWlJYgmUhYTlQsNj4flOdvxyqUOg2m0e92QFZ3WDWD9w/kLAI3BeiYyWHldZa1n4fR8FqC8/lB5YDDYt5+vW7PixXR7bZbGa+93snJ73+a9M0j8S28nrwLJz+Q7DSWcuLLL4MVkm4WepBB8Fip6TVAglrnv7qHnmKeJtkJQjvr6x/BFZKa3lxrFUCawx2Gc1lEPE9hMVaDoPqNg8rzl4HwoAfkh0rhLXlvjCXokOSAbDSnUvRFgkxCaySMKtV1hEs1nKYNpPCMoP1eLAspGBZV08kyq7xsNJay/OEmAyW8MoLCIvdxTbpJoQVujMG1bECWA1pu1wfnoOVNsJ7CTExLNGyUPMOzqGexTw7fxSSwbLC997eQlijiH26EFb8QxxQ3gkxMayieImgrwJYHdZSrm4ngmXZ4Togu45gNSIcl58jHlbaCK9JYUne2NYiR2EAq8v4z+VksMg3ue7THSsfaxR6mVYOVtrkoZcQE8IqiU3PUwirytiEs2YSWJZNdOiXFoIV+WTbr/GwUp5LmQctEawHY/F1NxgWZzkkgGW/JtbiA6ZjLWA1ojJbBoKVMnnoZfFFsER2sivCciBgsZZDe3tpWHl6N+nERrC2one2P1wDsNIlDzVN0rOKki+CnJIGsDrMwblWdWlYNvOOqMo6gjWKPin894iHlTZ56CbEBLBK+GU+noYQFrsv6WBZWJbZo78gP1vIwGpETwJuj3lYaZOHbhZfBEuy8JzpCBZnOehLxSxwPvO1hWBtWdHt2tnjYaU8l+IlxDCssWznEGk5hLB0tq3ld9VmtxALVt42e9y3M2TD+xzWKE6mpgZgpUweahpE5cCSvnD5UwfBQqbqwaTbbHYzcliWbWaQ99zjOpYHi91GCvVkDcBKmTzU7nZLlIr+35JrjKKO9AOXHs6+NJtzYjwsZ1Zlmt/PYfMNsxKqESqPCrN6XtvjVEtpLWutMpbs2zOWvmQwvbkuVJvuryM6Wsiybdf+64t/HVFrBytWnmaArkzp//1PNShPb28mvZ73i64m57P9YcppopKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpLS/5n+Cxo19RjstCwYAAAAAElFTkSuQmCC" 
                            className='modal-body-image' />
                            <img src="https://1000marcas.net/wp-content/uploads/2019/12/logo-Paypal.png" 
                            className='modal-body-image' />
                          </div>
                          </button>
                        </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" onClick={() => setActiveButton(null)} disabled={activeButton === null}>Continuar</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Datos de la tarjeta</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="rows-modals-pago">
                      <div className="First-row-modal-pago">
                        <div className="row">
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Número de tarjeta de crédito"
                              aria-label="Número de tarjeta de crédito"
                              maxLength="16"
                              value={cardNumber}
                              onChange={handleCardNumberChange}
                            />
                          </div>
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Titular de tarjeta"
                              aria-label="Titular de tarjeta"
                              value={cardHolder}
                              onChange={handleCardHolderChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="Second-row-modal-pago">
                        <div className="row">
                          <div className="col">
                            <input
                              type="month"
                              className="form-control"
                              placeholder="Expiración (MM/AA)"
                              aria-label="Expiración (MM/AA)"
                              value={expirationDate}
                              onChange={handleExpirationDateChange}
                            />
                          </div>
                          <div className="col">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="CVV"
                              aria-label="CVV"
                              maxLength="3"
                              value={cvv}
                              onChange={handleCvvChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <Link to={isFormValid ? "/Agradecimiento" : "#"} onClick={(e) => {
                      if (!isFormValid) {
                        e.preventDefault();
                        alert('Por favor complete todos los campos.');
                      } else {
                        handlePayClick();
                      }
                    }}>
                      <button
                        className="btn btn-primary"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                        disabled={!isFormValid}
                        onClick={HandleUpdateAndDelete}
                      >
                        Pagar
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* <button 
              className={ (Nombre !== '' && Apellido !== '' && Calle !== '' && Num !== '' && CP !== '' && Region !== '' && Pais !== '' && email !== '' && Prefijo !== '' && Tel !== '') ? "btn-Continuar-si" : "btn-Continuar"} 
              onClick={handleClick}
              {...(Nombre !== '' && Apellido !== '' && Calle !== '' && Num !== '' && CP !== '' && Region !== '' && Pais !== '' && email !== '' && Prefijo !== '' && Tel !== '' && {'data-bs-target': '#exampleModalToggle', 'data-bs-toggle': 'modal'})}
              >
              GUARDAR Y CONTINUAR
            </button> */}
            <button 
              className={ (Nombre !== '' && Apellido !== '' && Calle !== '' && Num !== '' && CP !== '' && Region !== '' && Pais !== '' && email !== '' && Prefijo !== '' && Tel !== '') ? "btn-Continuar-si" : "btn-Continuar"} 
              {...(Nombre !== '' && Apellido !== '' && Calle !== '' && Num !== '' && CP !== '' && Region !== '' && Pais !== '' && email !== '' && Prefijo !== '' && Tel !== '' && {'data-bs-target': '#exampleModalToggle', 'data-bs-toggle': 'modal'})}
              onClick={() => {
                if (carritos.length > 0) {
                  // Aquí colocas la lógica para guardar y continuar
                  handleClick();
                } else {
                  alert("No hay productos en el carrito para comprar.");
                }
              }}
            >
              GUARDAR Y CONTINUAR
            </button>

            
          </div>

        </div>



        <div className='co-right'>

          <div className='pedido'>
            <div className='rows-pedido'>
              <h3><b>PEDIDO</b></h3>
              <p>{cantidadProductos} productos</p>
            </div>

            <div>
            {carritos.filter(carrito => carrito.comprado == 'no').map(carrito => (
                        <div key={carrito.usuario_id}>
                          <PostCheckOut
                            image={carrito.imagen}
                            articulo={carrito.articulo}
                            precio={carrito.precio}
                            color={carrito.color}
                            talla={carrito.talla}
                          />
                          <hr /> {/* Línea divisoria entre cada carrito */}
                        </div>
                        
                    ))
            }  
            </div>

            {/* <div>
      <h1>CheckOut</h1>
      <p>Total parcial: ${totalparcial?.toFixed(2)}</p>
      <p>Total final: ${totalfinal?.toFixed(2)}</p>
      <p>Costo de Envío: {CostoEnvio}</p>
      <p>Cantidad de Productos: {cantidadProductos}</p>
    </div> */}
            <div  className='rows-pedido'>
              <p>Subtotal</p>
              <p>${totalparcial?.toFixed(2)}</p>
            </div>

            <div  className='rows-pedido'>
              <p>Envío (Precio estimado)</p>
              <p>{CostoEnvio}</p>
            </div>

            <div  className='rows-pedido techo'>
              <div>
                <p>Total</p>
              </div>
              
              <p> <b>${totalfinal?.toFixed(2)}</b> </p>
            </div>

          </div>

        </div>

      </div>
      
    </div>
  )
}

export default CheckOut
