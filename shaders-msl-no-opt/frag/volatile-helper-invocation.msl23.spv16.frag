#version 450
#extension GL_EXT_demote_to_helper_invocation : require

layout(location = 0) out float FragColor;

void func()
{
	FragColor = float(gl_HelperInvocation);
	demote;
	FragColor = float(gl_HelperInvocation);
}

void main()
{
	func();
}
