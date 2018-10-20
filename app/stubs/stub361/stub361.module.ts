import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub361Component} from "./stub361.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub361Component
        }])
    ],
    declarations: [
        Stub361Component
    ]
})
export class Stub361Module {

}
