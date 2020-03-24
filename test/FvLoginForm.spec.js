import { shallowMount } from '@vue/test-utils'
import FvLoginForm from '@/components/FvLoginForm.vue'

const factory = () => {
  return shallowMount(FvLoginForm, {})
}
describe('test du formulaire de connexion', () => {
  it('should not submit a blank form', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).beTruthy()
  })
  it('should be an error if password is false', () => {
    const wrapper = factory()
    wrapper.setData({
      password: 'azertyty',
      password_confirmation: 'azertoto'
    })
    // const msg = wrapper.find('#password_confirmation').hint
    expect(
      wrapper
        .find({ name: 'password_confirmation' })
        .at(0)
        .props()
        .hint()
    ).toContain('Saisissez votre mot de passe')
  })
  /*
    const wrapper = mount(FvLoginForm)
    it("donnees", () => {
        wrapper.setData({
          show4: false,
          valid: false,
          login: '',
          password: '',
          password_confirmation: '',
          ...validators,

        })
        wrapper.find('#connexion').trigger('click')
      expect(wrapper.wm.content).toBe(false)
    })
  */
  // it("Fonction info dans console", () => {
  //     const validation = jest.fn()
  //     const wrapper = mount(FvLoginForm)
  //     wrapper.setMethods({
  //       validate: validation
  //     })
  //     wrapper.find('#connexion').trigger('click')
  //     expect(validation()).toBeCalled()
  //   })
})
