import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub402Component} from "./stub402.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub402Component
        }])
    ],
    declarations: [
        Stub402Component
    ]
})
export class Stub402Module {

}
