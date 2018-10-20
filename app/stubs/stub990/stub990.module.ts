import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub990Component} from "./stub990.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub990Component
        }])
    ],
    declarations: [
        Stub990Component
    ]
})
export class Stub990Module {

}
