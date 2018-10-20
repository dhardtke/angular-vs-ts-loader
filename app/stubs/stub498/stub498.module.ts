import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub498Component} from "./stub498.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub498Component
        }])
    ],
    declarations: [
        Stub498Component
    ]
})
export class Stub498Module {

}
