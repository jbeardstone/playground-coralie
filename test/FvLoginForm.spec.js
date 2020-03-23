import { mount } from '@vue/test-utils';
import FvLoginForm from '@/components/FvLoginForm.vue';

describe ('valid_form', () =>{
  it("donnees", () => {
    const wrapper = mount(FvLoginForm, {
      propsData : {
        login: 'Coralie',
        password: '123abc',
        password_confirmation: '123abc'
      }
    })
    expect(wrapper.props().login).toBe('Coralie')
  })

  it("Fonction info dans console", () => {
    const validation = jest.fn();
    const wrapper = mount(FvLoginForm);
    wrapper.setMethods({
      validate: validation
    });
    wrapper.find('#connexion').trigger('click');
    expect(validation()).toBeCalled();
  });
});